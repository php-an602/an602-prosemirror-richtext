/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {MenuItem, canInsert} from "../../menu/"

function insertHorizontalRule(context) {
    let hr = context.schema.nodes.horizontal_rule;
    return new MenuItem({
        title: context.translate("Insert horizontal rule"),
        label: context.translate("Horizontal rule"),
        sortOrder: 200,
        enable(state) {
            return canInsert(state, hr)
        },
        run(state, dispatch) {
            dispatch(state.tr.replaceSelectionWith(hr.create()))
        }
    })
}

export function menu(context) {
    return [
        {
            id: 'insertHorizontalRule',
            node: 'horizontal_rule',
            group: 'insert',
            item: insertHorizontalRule(context)
        }
    ]
}