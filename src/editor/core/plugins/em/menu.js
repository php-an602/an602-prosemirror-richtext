/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {icons, markItem} from "../../menu/menu"


function markEm(context) {
    return markItem(context.schema.marks.em, {
        title: context.translate("Toggle emphasis"),
        icon: icons.em,
        sortOrder: 200});
}

export function menu(context) {
    return [
        {
            id: 'markEm',
            mark: 'em',
            group: 'marks',
            item: markEm(context)
        }
    ]
}