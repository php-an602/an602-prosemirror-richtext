/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {schema} from './schema'
import {headingRule} from './input-rules'
import {menu} from "./menu"
import markdown_it_anchor_plugin from "markdown-it-anchor"


const heading = {
    id: 'heading',
    schema: schema,
    menu: (context) => menu(context),
    inputRules: (schema) => {return [headingRule(schema)]},
};

export default heading;
