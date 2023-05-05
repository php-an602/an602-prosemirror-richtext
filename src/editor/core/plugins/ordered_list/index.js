/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {schema} from './schema'
import {orderedListRule} from './input-rules'
import {menu} from './menu'

const ordered_list = {
    id: 'ordered_list',
    menu: (context) => menu(context),
    schema: schema,
    inputRules: (schema) => {return [orderedListRule(schema)]}
};

export default ordered_list;
