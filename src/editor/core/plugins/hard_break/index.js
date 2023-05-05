/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */
import {schema} from './schema'
import {createLinkExtension} from "../../../markdown";
import {htmlBreak} from "./extension";

const hard_break = {
    id: 'hard_break',
    schema: schema,
    registerMarkdownIt: (markdownIt) => {
        markdownIt.inline.ruler.before('newline','htmlbreak', htmlBreak);
    }
};

export default hard_break;
