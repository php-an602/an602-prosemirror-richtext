/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
const schema = {
    nodes: {
        list_item: {
            sortOrder: 800,
            content: "paragraph block*",
            defining: true,
            parseDOM: [{tag: "li"}],
            toDOM: function toDOM() {
                return ["li", 0]
            },
            parseMarkdown: {block: "list_item"},
            toMarkdown: (state, node) => {
                state.renderContent(node);
            }
        }
    }
};

export {schema}
