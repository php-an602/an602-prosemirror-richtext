/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

const schema = {
    nodes: {
        hard_break: {
            sortOrder: 1100,
            inline: true,
            group: "inline",
            selectable: false,
            parseDOM: [{tag: "br"}],
            toDOM: () => {
                return ["br"]
            },
            parseMarkdown: {hardbreak: {node: "hard_break"}},
            toMarkdown: (state, node, parent, index) => {
                for (let i = index + 1; i < parent.childCount; i++)
                { if (parent.child(i).type != node.type) {

                    (state.table) ? state.write('<br>') : state.write("\\\n");
                    return
                } }
            }
        }
    }
};

export {schema}