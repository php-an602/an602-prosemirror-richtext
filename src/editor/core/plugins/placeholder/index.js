/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {placeholderPlugin} from './plugin'

const placeholder = {
    id: 'placeholder',
    plugins: (context) => {
        if(!context.options.placeholder || !context.options.placeholder.text) {
            return [];
        }

        return [
            placeholderPlugin(context)
        ];
    },
};

export default placeholder;
