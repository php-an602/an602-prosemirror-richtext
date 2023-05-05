/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

const schema = {
    marks: {
        strikethrough: {
            parseDOM: [{tag: "s"}],
            toDOM: () => {
                return ["s"]
            },
            parseMarkdown: {s: {mark: "strikethrough"}},
            toMarkdown: {open: "~~", close: "~~", mixable: true, expelEnclosingWhitespace: true}
        }
    }
};

export {schema}