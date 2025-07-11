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
import Link from 'next/link';
import styles from './ButtonSpecial.module.scss';
const isInternal = (href) => href.startsWith('/');
const ButtonSpecial = (_a) => {
    var { icon, label, href, size = 'small', className } = _a, props = __rest(_a, ["icon", "label", "href", "size", "className"]);
    const content = (React.createElement(React.Fragment, null,
        icon,
        React.createElement("span", { className: `${styles.label} ${size === 'big' ? styles.big : styles.small}` }, label)));
    if (isInternal(href)) {
        return (React.createElement(Link, Object.assign({ href: href, className: `${styles.link} ${className || ''} ${size === 'big' ? styles.big : styles.small}` }, props), content));
    }
    return (React.createElement("a", Object.assign({ href: href, className: `${styles.link} ${className || ''} ${size === 'big' ? styles.big : styles.small}`, target: '_blank', rel: 'noopener noreferrer' }, props), content));
};
export default ButtonSpecial;
