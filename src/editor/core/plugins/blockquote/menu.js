/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {icons, cmdItem, wrapItem} from "../../menu/menu"

function wrapBlockQuote(context) {
    return wrapItem(context.schema.nodes.blockquote, {
        title: context.translate("Wrap in block quote"),
        icon: icons.blockquote,
        sortOrder: 300
    });
}

export function menu(context) {
    return [
        {
            id: 'wrapBlockQuote',
            node: 'blockquote',
            group: 'format',
            item: wrapBlockQuote(context)
        }
    ]
}