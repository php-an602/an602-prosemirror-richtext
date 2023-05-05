/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {canInsert, canInsertLink, icons, markItem, MenuItem} from "../../menu/menu"
import {SimpleEmojiState} from "./state";
import {getProvider} from "./provider";

function insertEmoji(context) {
    return new MenuItem({
        title: context.translate("Insert Emoji"),
        icon: icons.emoji,
        sortOrder: 350,
        enable(state) {
            return canInsert(state, context.schema.nodes.image) && canInsertLink(state)
        },
        run(state, _, view, e) {
            if (!$('.an602-richtext-provider:visible').length) {
                setTimeout(function () {
                    new SimpleEmojiState(getProvider(context)).update(state, view, e.target);
                }, 50);
            }
        }
    })
}

export function menu(context) {
    return [
        {
            id: 'insertEmoji',
            node: 'emoji',
            item: insertEmoji(context)
        }
    ]
}