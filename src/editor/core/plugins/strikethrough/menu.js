/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {icons, markItem} from "../../menu/menu"


function markStrikethrough(context) {
    return markItem(context.schema.marks.strikethrough, {
        title: context.translate("Toggle strikethrough"),
        icon: icons.strikethrough,
        sortOrder: 300
    });
}

export function menu(context) {
    return [
        {
            id: 'markStrikethrough',
            mark: 'strikethrough',
            group: 'marks',
            item: markStrikethrough(context)
        }
    ]
}