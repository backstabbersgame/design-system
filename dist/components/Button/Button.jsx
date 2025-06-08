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
import clsx from 'clsx';
import styles from './Button.module.scss';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import BasicButton from '../../core/button';
export const Button = (_a) => {
    var { variant = 'primary', arrowLeft = false, arrowRight = false, href, className, children } = _a, props = __rest(_a, ["variant", "arrowLeft", "arrowRight", "href", "className", "children"]);
    return (<BasicButton className={`${styles.button} ${styles[variant]} ${className || ''}`} href={href} {...props}>
      {arrowLeft && (<ArrowLeft size={24} className={clsx(styles.arrow)}/>)}
      {children}
      {arrowRight && (<ArrowRight size={24} className={clsx(styles.arrow)}/>)}
    </BasicButton>);
};
export default Button;
