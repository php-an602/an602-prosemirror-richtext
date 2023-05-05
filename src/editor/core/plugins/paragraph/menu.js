/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {blockTypeItem} from "../../menu/menu"

function makeParagraph(context) {
    return blockTypeItem(context.schema.nodes.paragraph, {
        title: context.translate("Change to paragraph"),
        label: context.translate("Paragraph")
    })
}

export function menu(context) {
    return [
        {
            id: 'makeParagraph',
            node: 'paragraph',
            group: 'types',
            item: makeParagraph(context)
        }
    ]
}