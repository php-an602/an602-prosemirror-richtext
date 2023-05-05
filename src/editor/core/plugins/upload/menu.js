/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {MenuItem, canInsertLink} from "../../menu"
import {triggerUpload} from "./service"

let uploadFile = (context) => {
    return new MenuItem({
        title: context.translate("Upload and include a File"),
        label: context.translate("Upload File"),
        sortOrder: 0,
        enable(state) {
            return canInsertLink(state);
        },
        run(state, dispatch, view) {
            if (view.state.selection.$from.parent.inlineContent) {
                triggerUpload(state, view, context);
            }
        }
    });
};

export function menu(context) {
    return [
        {
            id: 'uploadFile',
            mark: 'link',
            group: 'insert',
            item: uploadFile(context)
        }
    ]
}