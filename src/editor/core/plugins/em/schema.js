/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

const schema = {
    marks: {
        em: {
            sortOrder: 100,
            parseDOM: [{tag: "i"}, {tag: "em"},
                {
                    style: "font-style", getAttrs: function (value) {
                    return value == "italic" && null;
                }
                }],
            toDOM: () => {
                return ["em"]
            },
            parseMarkdown: {mark: "em"},
            toMarkdown: {open: "*", close: "*", mixable: true, expelEnclosingWhitespace: true}
        }
    }
};

export {schema}