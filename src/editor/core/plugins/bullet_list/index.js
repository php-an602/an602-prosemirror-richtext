/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {schema} from './schema'
import {bulletListRule} from './input-rules'
import {menu} from './menu'

const bullet_list = {
    id: 'bullet_list',
    schema: schema,
    menu: (context) => {
        return menu(context);
    },
    inputRules: (schema) => {return [bulletListRule(schema)]}
};

export default bullet_list;
