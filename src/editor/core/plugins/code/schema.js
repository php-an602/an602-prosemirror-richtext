/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

const schema = {
    marks: {
        code:{
            isCode: true,
            sortOrder: 400,
            preventMarks: ['link'],
            parseDOM: [{tag: "code"}],
            toDOM: () => {
                return ["code"]
            },
            parseMarkdown:  {code_inline: {mark: "code"}},
            toMarkdown: {open: "`", close: "`"}
        }
    }
};

export {schema}