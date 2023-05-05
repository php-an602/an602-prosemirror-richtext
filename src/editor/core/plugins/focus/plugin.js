/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {Plugin, PluginKey} from 'prosemirror-state';

const focusKey = new PluginKey('focus');

const focusPlugin = (context) => {
    return new Plugin({
        key: focusKey,
        state: {
            init() {
                return false;
            },
            apply(transaction, prevFocused) {
                let focused = transaction.getMeta(focusKey);
                if (typeof focused === 'boolean') {
                    return focused;
                }
                return prevFocused;
            }
        },
        props: {
            handleDOMEvents: {
                blur: view => {
                    view.dispatch(view.state.tr.setMeta(focusKey, false));
                    return false;

                },
                focus: (view, event) => {
                    view.dispatch(view.state.tr.setMeta(focusKey, true));
                    return false;

                }
            }
        }
    });
};

export {focusPlugin, focusKey}