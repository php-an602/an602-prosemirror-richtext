/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {attributesPlugin} from './plugin'



const attributes = {

    id: 'attributes',

    plugins: (context) => {

        return [

            attributesPlugin(context)

        ]

    },

};



export default attributes;

