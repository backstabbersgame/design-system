var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import styles from './index.module.scss';
import { HouseIcon } from '@phosphor-icons/react/dist/ssr';
export const BasicNav = (_a) => {
    var { variant = 'solara', links, mode = 'light', activeLink, onLinkClick, isSubpage, subpageLink, pageLink, className } = _a, props = __rest(_a, ["variant", "links", "mode", "activeLink", "onLinkClick", "isSubpage", "subpageLink", "pageLink", "className"]);
    return (React.createElement("nav", Object.assign({ className: `${styles.nav} ${className || ''}` }, props),
        isSubpage && React.createElement("a", { key: pageLink, href: pageLink, className: `${styles.home}
          ${mode === 'light' ? styles.light : styles.dark}
          ${variant !== 'solara' ? styles.nonSolara : ''}` },
            React.createElement(HouseIcon, { size: 24 })),
        links.map(({ name, href }) => (React.createElement("a", { key: href, href: href, className: `${styles.link} ${activeLink === href ? styles.selected : ''} 
          ${mode === 'light' ? styles.light : styles.dark}
          ${variant !== 'solara' ? styles.nonSolara : ''}`, onClick: (e) => {
                if (href.startsWith('#')) {
                    e.preventDefault();
                }
                onLinkClick === null || onLinkClick === void 0 ? void 0 : onLinkClick(href);
            }, "aria-current": activeLink === href ? 'page' : undefined }, name)))));
};
export default BasicNav;
