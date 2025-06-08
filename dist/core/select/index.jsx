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
import React, { useState } from 'react';
import styles from './index.module.scss';
export const BasicSelect = (_a) => {
    var { options, placeholder, multiple = false, className } = _a, props = __rest(_a, ["options", "placeholder", "multiple", "className"]);
    const [selected, setSelected] = useState('');
    return (<select className={`${styles.select}  ${selected === '' ? styles.placeholder : ''}
        ${multiple ? styles.hide : ''}
        ${className || ''}`} multiple={multiple} onChange={(e) => setSelected(e.target.value)} defaultValue='' {...props}>
      {!multiple && placeholder && (<option value={''} disabled>
          {placeholder}
        </option>)}
      {options.map((option) => (<option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>))}
    </select>);
};
export default BasicSelect;
