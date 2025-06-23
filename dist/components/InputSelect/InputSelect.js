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
import styles from './InputSelect.module.scss';
import BasicLabel from '../../core/label';
import BasicSelect from '../../core/select';
const InputSelect = (_a) => {
    var { label, placeholder, options, hint, error, required = false, disabled = false, id, className } = _a, props = __rest(_a, ["label", "placeholder", "options", "hint", "error", "required", "disabled", "id", "className"]);
    return (React.createElement("div", { className: styles.container },
        label && (React.createElement(BasicLabel, { htmlFor: id },
            label,
            required && React.createElement(BasicLabel, { className: styles.required }))),
        React.createElement("div", { className: styles.field },
            React.createElement(BasicSelect, Object.assign({ id: id, options: options, disabled: disabled, className: `${styles['basic-select']}
          ${error ? styles['user-invalid'] : undefined}
          ${className || ''}` }, props))),
        React.createElement("span", { id: `${id}-hint`, className: error ? styles.error : styles.hint }, error ? error : hint || '\u00A0')));
};
export default InputSelect;
