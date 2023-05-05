/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import { wrappingInputRule} from "prosemirror-inputrules"

// : (NodeType) → InputRule
// Given a list node type, returns an input rule that turns a number
// followed by a dot at the start of a textblock into an ordered list.
let orderedListRule = function(schema) {
    return wrappingInputRule(/^(\d+)\.\s$/, schema.nodes.ordered_list, match => ({order: +match[1]}),
        (match, node) => node.childCount + node.attrs.order == +match[1])
};

export {orderedListRule}