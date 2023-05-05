/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {icons, MenuItem} from "../../menu/menu"

function fullScreen(context) {
    return new MenuItem({
        id: 'fullscreen',
        title: "Fullscreen",
        sortOrder: 300,
        run: function() {
            let $editor = context.editor.$;
            if($editor.is('.fullscreen')) {
               minimize(context);
            } else {
                maximize(context);
            }
        },
        icon: icons.enlarge
    });
}

export function minimize(context, menuItem) {
    let $editor = context.editor.$;
    if($editor.is('.fullscreen')) {

        $('body').removeClass('modal-open');
        $editor.removeClass('fullscreen');
        $editor.find('.Prosemirror').blur();

        context.fullScreenMenuItem.switchIcon(icons.enlarge);
    }
}

export function maximize(context, menuItem) {
    let $editor = context.editor.$;
    if(!$editor.is('.fullscreen')) {

        // Fixes a bug in ios safari when displaying a position:fixed element with input focus...
        document.activeElement.blur();
        setTimeout(() =>  {context.editor.view.focus()}, 200);

        $('body').addClass('modal-open');
        $editor.addClass('fullscreen');

        context.fullScreenMenuItem.switchIcon(icons.shrink);
    }
}

export function menu(context) {
    return [
        {
            id: 'fullScreen',
            group: 'resize',
            item: fullScreen(context)
        },
    ]
}