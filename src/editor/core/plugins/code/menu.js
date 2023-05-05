/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {icons, markItem} from "../../menu/menu"


function markCode(context) {
    return markItem(context.schema.marks.code, {
        title: context.translate("Toggle code font"),
        icon: icons.code,
        sortOrder: 400
    });
}

export function menu(context) {
    return [
        {
            id: 'markCode',
            mark: 'code',
            group: 'marks',
            item: markCode(context)
        }
    ]
}