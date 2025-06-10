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
export const BasicButton = (_a) => {
    var { children, className, href } = _a, props = __rest(_a, ["children", "className", "href"]);
    const combinedClassName = `${styles.button} ${className || ''}`;
    if (href) {
        return (React.createElement("a", Object.assign({ className: combinedClassName, href: href, target: '_blank', rel: 'noopener noreferrer' }, props), children));
    }
    return (React.createElement("button", Object.assign({ className: combinedClassName }, props), children));
};
export default BasicButton;
