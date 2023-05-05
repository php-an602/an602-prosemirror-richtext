/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import { Plugin, PluginKey } from 'prosemirror-state';
import { EmojiQueryState } from './state';
import {EmojiProvider, getProvider} from "./provider";
import twemoji from "twemoji";
import * as util from "./util";

const pluginKey = new PluginKey('emoji');

const emojiPlugin = (context) => {
    return new Plugin({
        props: {
            transformPastedText: (text) => {
                text = twemoji.parse(text, context.getPluginOption('emoji', 'twemoji'));

                return text.replace(/\<img class="emoji"[^\\\>]* alt=\"([^\"]*)\"[^\\\>]*\/>/g, function(match, char) {
                    return ':'+util.getNameByChar(char)+':';
                });
            },
        },
        state: {
            init(config, state) {
                return new EmojiQueryState(state, {
                    provider: getProvider(context)
                });
            },
            apply(tr, prevPluginState, oldState, newState) {
                return prevPluginState;
            }
        },
        key: pluginKey,
        view: (view) => {
            const emojiState = pluginKey.getState(view.state);

            return {
                update(view, prevState) {
                    emojiState.update(view.state, view);
                },
                destroy() {}
            };
        },
    });
};

export {emojiPlugin, pluginKey}