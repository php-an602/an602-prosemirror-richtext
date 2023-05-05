/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
const schema = {
    nodes: {
        bullet_list: {
            sortOrder: 700,
            content: "list_item+",
            group: "block",
            attrs: {tight: {default: true}},
            parseDOM: [{
                tag: "ul", getAttrs: function (dom) {
                    return ({tight: dom.hasAttribute("data-tight")});
                }
            }],
            toDOM: (node) => {
                return ["ul", {"data-tight": node.attrs.tight ? "true" : null}, 0]
            },
            parseMarkdown: {block: "bullet_list"},
            toMarkdown: (state, node) => {
                state.renderList(node, "  ", function () { return (node.attrs.bullet || "*") + " "; });
            }
        }
    }
};

export {schema}
