/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {menu, minimize, maximize} from "./menu"

const fullscreen = {
    id: 'fullscreen',
    init(context) {
        if(context.getPluginOption('fullscreen', 'autoFullScreen') === true) {
            context.editor.$.on('click', '.ProseMirror', function(e) {
                if(an602.require('ui.view').isSmall() && !context.editor.$.is('.fullscreen')) {
                    maximize(context);
                }
            });
        }

        context.editor.$.on('clear', function() {
            minimize(context);
        });
    },
    menu: (context) => {
        let fullScreenMenu = menu(context);
        context.fullScreenMenuItem = fullScreenMenu[0].item;
        return fullScreenMenu;
    }
};

export default fullscreen;
