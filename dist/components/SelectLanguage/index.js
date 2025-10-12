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
export const SelectLanguage = (_a) => {
    var { options, currentLocale, onLocaleChange, className, colorMode = 'dark' } = _a, props = __rest(_a, ["options", "currentLocale", "onLocaleChange", "className", "colorMode"]);
    const flag = currentLocale === 'pt-BR' ? '🇧🇷' : '🇺🇸';
    const aria = currentLocale === 'pt-BR' ? 'Selecionar idioma' : 'Select language';
    return (React.createElement("div", { className: `${styles.languageSelect} ${colorMode === 'light' ? styles.light : styles.dark} ${className || ''}` },
        React.createElement("button", { type: 'button', className: styles.flagButton, "aria-label": aria },
            React.createElement("span", { className: styles.flag }, flag)),
        React.createElement("select", Object.assign({ className: `${styles.nativeSelect} ${className || ''}`, onChange: (e) => onLocaleChange(e.target.value), value: currentLocale, "aria-label": aria }, props), options.map((option) => (React.createElement("option", { key: option.value, value: option.value }, option.label))))));
};
export default SelectLanguage;
