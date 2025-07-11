'use client';
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
import styles from './BackButton.module.scss';
import { ArrowLeftIcon } from '@phosphor-icons/react/dist/ssr';
const BackButton = (_a) => {
    var props = __rest(_a, []);
    return (React.createElement("button", Object.assign({ className: styles.backButton }, props),
        React.createElement(ArrowLeftIcon, { size: 24, className: styles.arrow })));
};
export default BackButton;
