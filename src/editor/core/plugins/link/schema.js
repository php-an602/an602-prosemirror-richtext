/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2017 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

import {validateHref, DEFAULT_LINK_REL} from "../../util/linkUtil";

const schema = {
    marks: {
        sortOrder: 300,
        link: {
            attrs: {
                href: {},
                title: {default: null},
                target: {default: '_blank'},
                fileGuid: { default: null},
                rel: {default: DEFAULT_LINK_REL}
            },
            inclusive: false,
            parseDOM:
                [{
                    tag: "a[href]", getAttrs: function getAttrs(dom) {
                        let href = dom.getAttribute("href");
                        if (!validateHref(href))  {
                            href = '#';
                        }

                        return {
                            href: href,
                            title: dom.getAttribute("title"),
                            target: dom.getAttribute("target"),
                            fileGuid: dom.getAttribute("data-file-guid")
                        }
                    }
                }],
            toDOM(node) { let {href, title} = node.attrs; return ["a", {href, title}, 0] },
            parseMarkdown: {
                mark: "link", getAttrs: function (tok) {
                    let href = (window.an602) ? an602.modules.file.filterFileUrl(tok.attrGet("href")).url : tok.attrGet("href");
                    let fileGuid = (window.an602) ? an602.modules.file.filterFileUrl(tok.attrGet("href")).guid : null;

                    if (!validateHref(href))  {
                        href = '#';
                    }

                    return ({
                        href: href,
                        title: tok.attrGet("title") || null,
                        fileGuid: fileGuid
                    });
                }
            },
            toMarkdown: {
                open: "[",
                close: function close(state, mark) {
                    let href = (mark.attrs.fileGuid) ? 'file-guid:'+mark.attrs.fileGuid  : mark.attrs.href;
                    return "](" + state.esc(href) + (mark.attrs.title ? " " + state.quote(mark.attrs.title) : "") + ")"
                }
            }
        }
    }
};

export {schema}