/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

// Process [link](oembed:<href>)

import {createLinkExtension} from "../../../markdown/linkExtensionTokenizer"

let oembed_plugin = createLinkExtension('oembed', {node : 'div'});

export {oembed_plugin}
