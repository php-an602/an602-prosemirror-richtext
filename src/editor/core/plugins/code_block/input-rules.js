/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {textblockTypeInputRule} from "prosemirror-inputrules"

// : (NodeType) → InputRule
// Given a blockquote node type, returns an input rule that turns `"> "`
// at the start of a textblock into a blockquote.
const codeBlockRule = (schema) => {
    return textblockTypeInputRule(/^```$/, schema.nodes.code_block)
};

export {codeBlockRule};