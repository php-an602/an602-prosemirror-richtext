/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

const schema = {
    marks: {
        strong: {
            sortOrder: 200,
            parseDOM: [{tag: "b"}, {tag: "strong"},
                {
                    style: "font-weight", getAttrs: function (value) {
                    return /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null;
                }
                }],
            toDOM: () => {
                return ["strong"]
            },
            parseMarkdown: {mark: "strong"},
            toMarkdown: {open: "**", close: "**", mixable: true, expelEnclosingWhitespace: true}
        }
    }
};

export {schema}