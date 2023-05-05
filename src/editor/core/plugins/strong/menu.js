/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {icons, markItem} from "../../menu/menu"


function markStrong(context) {
    return markItem(context.schema.marks.strong, {
        title: context.translate("Toggle strong style"),
        icon: icons.strong,
        sortOrder: 100
    });
}

export function menu(context) {
    return [
        {
            id: 'markStrong',
            mark: 'strong',
            group: 'marks',
            item: markStrong(context)
        }
    ]
}