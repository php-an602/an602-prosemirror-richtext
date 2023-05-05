/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import markdownit from "markdown-it"
import {getPlugins, PresetManager} from "../core/plugins"

let presets = new PresetManager({
    name: 'renderer',
    create: (options) => {
        return createRenderer(options);
    }
});

let getRenderer = (context) => {
    return presets.check(context);
};

let createRenderer = function(context) {
    let markdownItOptions = context && context.options.markdownIt || {html: false, breaks: true, linkify: true};
    let renderer = markdownit(markdownItOptions);

    const plugins = getPlugins(context);
    plugins.forEach((plugin) => {
        if(plugin.registerMarkdownIt) {
            plugin.registerMarkdownIt(renderer);
        }
    });

    return renderer;
};

export {getRenderer}
