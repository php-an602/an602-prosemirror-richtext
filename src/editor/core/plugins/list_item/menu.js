/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import { liftListItem, sinkListItem } from "prosemirror-schema-list"
import {icons, cmdItem} from "../../menu/menu"

function indentListItem(context) {
    return cmdItem(sinkListItem(context.schema.nodes.list_item), {
        title: context.translate("Increase indent"),
        icon: icons.indent,
        sortOrder: 120
    });
}

function outdentListItem(context) {
    return cmdItem(liftListItem(context.schema.nodes.list_item), {
        title: context.translate("Decrease indent"),
        icon: icons.outdent,
        sortOrder: 110
    });
}

export function menu(context) {
    return [
        {
            id: 'outdentListItem',
            node: 'list_item',
            group: 'format',
            item: outdentListItem(context)
        },
        {
            id: 'indentListItem',
            node: 'list_item',
            group: 'format',
            item: indentListItem(context)
        }
    ]
}