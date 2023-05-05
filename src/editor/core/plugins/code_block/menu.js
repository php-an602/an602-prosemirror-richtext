/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {blockTypeItem} from "../../menu/menu"

function makeCodeBlock(context) {
    return blockTypeItem(context.schema.nodes.code_block, {
        title: context.translate("Change to code block"),
        label: context.translate("Code")
    })
}

export function menu(context) {
    return [
        {
            id: 'makeCodeBlock',
            node: 'code_block',
            group: 'types',
            item: makeCodeBlock(context)
        }
    ]
}