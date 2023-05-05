/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {menu, getNodes} from "./menu"

const resizeNav = {
    id: 'resizeNav',
    init(context) {
        context.event.on('afterMenuBarInit', (evt, instance) => {
            getNodes(context).hide();
        }).on('afterMenuBarUpdate', (evt, instance) => {
            if(!$(instance.menu).find('.ProseMirror-menu-resizeNav').data('state')) {
                getNodes(context).hide();
            }
        });
    },
    menu: (context) => menu(context)
};

export default resizeNav;
