import {getAltExtensionByFloat, FLOAT_NONE} from './imageFloat'

/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

const schema = {
    nodes: {
        image: {
            sortOrder: 1000,
            inline: true,
            attrs: {
                src: {},
                alt: {default: null},
                title: {default: null},
                width: {default: null},
                height: {default: null},
                float: {default: FLOAT_NONE},
                fileGuid: { default: null},
            },
            group: "inline",
            draggable: true,
            parseDOM: [{
                tag: "img[src]", getAttrs: function getAttrs(dom) {
                    return {
                        src: dom.getAttribute("src"),
                        title: dom.getAttribute("title"),
                        alt: dom.getAttribute("alt"),
                        width: dom.getAttribute("width"),
                        height: dom.getAttribute("height"),
                        fileGuid: dom.getAttribute("data-file-guid")
                    }
                }
            }],
            parseMarkdown: {
                node: "image", getAttrs: function (tok) {
                    let src =  (window.an602) ? an602.modules.file.filterFileUrl(tok.attrGet("src")).url : tok.attrGet("src");
                    let fileGuid = (window.an602) ?  an602.modules.file.filterFileUrl(tok.attrGet("src")).guid : null;

                    return ({
                        src: src,
                        title: tok.attrGet("title") || null,
                        width: tok.attrGet("width") || null,
                        height: tok.attrGet("height") || null,
                        alt: tok.attrGet("alt") || null,
                        float: tok.attrGet("float") || FLOAT_NONE,
                        fileGuid: fileGuid
                    });
                }
            },
            toMarkdown: (state, node) => {
                let resizeAddition = "";

                if(node.attrs.width || node.attrs.height) {
                    resizeAddition += " =";
                    resizeAddition += (node.attrs.width) ? node.attrs.width : '';
                    resizeAddition += 'x';
                    resizeAddition += (node.attrs.height) ? node.attrs.height : '';
                }

                let src = (node.attrs.fileGuid) ? 'file-guid:'+node.attrs.fileGuid  : node.attrs.src;

                let float = getAltExtensionByFloat(node.attrs.float);

                state.write("![" + state.esc(node.attrs.alt || "") + float + "](" + state.esc(src) +
                    (node.attrs.title ? " " + state.quote(node.attrs.title) : "") + resizeAddition + ")");
            }
        }
    }
};

export {schema}