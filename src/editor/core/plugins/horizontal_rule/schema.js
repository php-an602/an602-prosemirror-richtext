/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
const schema = {
    nodes: {
        horizontal_rule: {
            sortOrder: 300,
            group: "block",
            parseDOM: [{tag: "hr"}],
            toDOM: function toDOM() {
                return ["div", ["hr"]]
            },
            parseMarkdown: {hr: {node: "horizontal_rule"}},
            toMarkdown: (state, node) => {
                state.write(node.attrs.markup || "---");
                state.closeBlock(node);
            }
        }
    }
};

export {schema}