/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {clipboardPlugin} from "./plugin"

const clipboard = {
    id: 'clipboard',
    plugins: (context) => {
        return [
            clipboardPlugin(context)
        ]
    },
};

export default clipboard;
