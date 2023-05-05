/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {MarkdownSerializer, MarkdownSerializerState} from "prosemirror-markdown"
import {getPlugins, PresetManager} from "../core/plugins"
import {Mark} from "prosemirror-model";

let presets = new PresetManager({
    name: 'serializer',
    create: (context) => {
        return createSerializer(context);
    }
});

let getSerializer = (context) => {
    return presets.check(context);
};

let createSerializer = (context) => {
    const plugins = getPlugins(context);
    let nodeSpec = {};
    let markSpec = {};
    plugins.forEach((plugin) => {
        if (!plugin.schema) {
            return;
        }

        let nodes = plugin.schema.nodes || {};

        for (let key in nodes) {
            let node = nodes[key];
            if(node.toMarkdown) {
                nodeSpec[key] = node.toMarkdown
            }
        }

        let marks = plugin.schema.marks || {};

        for (let key in marks) {
            let mark = marks[key];
            if(mark.toMarkdown) {
                markSpec[key] = mark.toMarkdown
            } else {
                markSpec[key] = {open: '', close: ''};
            }
        }
    });

    return new an602MarkdownSerializer(nodeSpec, markSpec);
};

class an602MarkdownSerializer extends MarkdownSerializer {
    // :: (Node, ?Object) → string
    // Serialize the content of the given node to
    // [CommonMark](http://commonmark.org/).
    serialize(content, options) {
        let state = new an602MarkdownSerializerState(this.nodes, this.marks, options)
        state.renderContent(content)
        return state.out
    }
}

class an602MarkdownSerializerState extends MarkdownSerializerState {
    // :: (string, ?bool) → string
    // Escape the given string so that it can safely appear in Markdown
    // content. If `startOfLine` is true, also escape characters that
    // has special meaning only at the start of the line.
    esc(str, startOfLine) {
        str = str.replace(/[|`*\\~\[\]]/g, "\\$&")
        if (startOfLine) str = str.replace(/^[:#\-*+]/, "\\$&").replace(/^(\d+)\./, "$1\\.")
        return str
    }
}

export {getSerializer}