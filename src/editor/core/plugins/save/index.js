/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {savePlugin} from './plugin'

const mention = {
    id: 'save',
    plugins: (context) => {
        if(!context.options.mention || !context.options.mention.provider) {
            return [];
        }
        return [
            savePlugin(context)
        ]
    },
};

export default mention;
