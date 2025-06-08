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
    return (<div className={styles.container}>
      {label && (<BasicLabel htmlFor={id}>
          {label}
          {required && <BasicLabel className={styles.required}></BasicLabel>}
        </BasicLabel>)}
      <div className={styles.field}>
        <BasicTextArea ref={textareaRef} id={id} required={required} aria-describedby={hint ? `${id}-hint` : undefined} className={`${styles.textarea}
          ${error ? styles['user-invalid'] : ''}
          ${className || ''}`} maxLength={max} value={value} onChange={handleChange} {...props}/>
      </div>
      <div className={styles['sub-field']}>
        <span id={`${id}-hint`} className={error ? styles.error : styles.hint}>
          {error ? error : hint || '\u00A0'}
        </span>
        {/* {hint && (
          <span
            id={`${id}-hint`}
            className={styles.hint}
          >
            {hint}
          </span>
        )}
        {error && <span className={styles.error}>{error}</span>} */}
        <div className={styles.count}>
          <span className={styles.current}>{charCount}</span>
          <span className={styles.maximum}>/{max}</span>
        </div>
      </div>
    </div>);
};
export default InputTextArea;
