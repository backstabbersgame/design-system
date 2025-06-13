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
import React, { useEffect, useRef, useState } from 'react';
import styles from './InputTextArea.module.scss';
import BasicLabel from '../../core/label';
import BasicTextArea from '../../core/text-area';
export const InputTextArea = (_a) => {
    var { label, hint, error, required = false, id, className, value, onChange } = _a, props = __rest(_a, ["label", "hint", "error", "required", "id", "className", "value", "onChange"]);
    const textareaRef = useRef(null);
    const [charCount, setCharCount] = useState(typeof value === 'string' ? value.length : 0);
    const max = 500;
    useEffect(() => {
        if (typeof value === 'string') {
            setCharCount(value.length);
        }
    }, [value]);
    const handleChange = (e) => {
        setCharCount(e.target.value.length);
        if (onChange)
            onChange(e);
    };
    return (React.createElement("div", { className: styles.container },
        label && (React.createElement(BasicLabel, { htmlFor: id },
            label,
            required && React.createElement(BasicLabel, { className: styles.required }))),
        React.createElement("div", { className: styles.field },
            React.createElement(BasicTextArea, Object.assign({ ref: textareaRef, id: id, required: required, "aria-describedby": hint ? `${id}-hint` : undefined, className: `${styles.textarea}
          ${error ? styles['user-invalid'] : undefined}
          ${className || ''}`, maxLength: max, value: value, onChange: handleChange }, props))),
        React.createElement("div", { className: styles['sub-field'] },
            React.createElement("span", { id: `${id}-hint`, className: error ? styles.error : styles.hint }, error ? error : hint || '\u00A0'),
            React.createElement("div", { className: styles.count },
                React.createElement("span", { className: styles.current }, charCount),
                React.createElement("span", { className: styles.maximum },
                    "/",
                    max)))));
};
export default InputTextArea;
