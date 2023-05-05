/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {focusPlugin} from './plugin';

const focus = {
    id: 'focus',
    plugins: (context) => {
        return [
            focusPlugin(context)
        ];
    },
};

export default focus;
