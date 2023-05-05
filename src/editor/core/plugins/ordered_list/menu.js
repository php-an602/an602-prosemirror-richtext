/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {wrapInList} from "prosemirror-schema-list"
import {icons, cmdItem, wrapListItem} from "../../menu/menu"

function wrapOrderedList(context) {
    return cmdItem(wrapInList(context.schema.nodes.ordered_list), {
        title: context.translate("Wrap in ordered list"),
        icon: icons.orderedList,
        sortOrder: 200
    });
}

export function menu(context) {
    return [
        {
            id: 'wrapOrderedList',
            node: 'ordered_list',
            group: 'format',
            item: wrapOrderedList(context)
        }
    ]
}