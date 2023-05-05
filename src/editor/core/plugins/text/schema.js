import {$node} from '../../util/node';


/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
const schema = {
    nodes: {
        text: {
            sortOrder: 900,
            group: "inline",
            toDOM: function toDOM(node) {
                return node.text
            },
            toMarkdown: (state, node) => {
                let isCodeMark = false;
                node.marks.forEach(function(mark) {
                    if(mark.type.spec.isCode) {
                        isCodeMark = true;
                    }
                });

                let text = node.text;

                if(isCodeMark) {
                    text = text.replace('`', '');
                }

                state.text(text, !isCodeMark);
            }
        }
    }
};

export {schema}
