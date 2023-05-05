/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {wrapInList} from "prosemirror-schema-list"
import {icons, cmdItem} from "../../menu/menu"

function wrapBulletList(context) {
    return cmdItem(wrapInList(context.schema.nodes.bullet_list), {
        title: context.translate("Wrap in bullet list"),
        icon: icons.bulletList,
        sortOrder: 100
    });
}

export function menu(context) {
    return [
        {
            id: 'wrapBulletList',
            node: 'bullet_list',
            group: 'format',
            item: wrapBulletList(context)
        }
    ]
}