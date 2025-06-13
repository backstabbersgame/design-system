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
import { CheckCircle } from '@phosphor-icons/react/dist/ssr';
import styles from './InputText.module.scss';
import BasicLabel from '../../core/label';
import BasicInput from '../../core/input';
export const InputText = (_a) => {
    var { label, hint, error, required = false, showIcon = false, id, className } = _a, props = __rest(_a, ["label", "hint", "error", "required", "showIcon", "id", "className"]);
    return (React.createElement("div", { className: styles.container },
        label && (React.createElement(BasicLabel, { htmlFor: id },
            label,
            required && React.createElement(BasicLabel, { className: styles.required }))),
        React.createElement("div", { className: styles.field },
            React.createElement(BasicInput, Object.assign({ id: id, required: required, "aria-describedby": hint ? `${id}-hint` : undefined, className: `${styles.input}
          ${error ? styles['user-invalid'] : undefined}
          ${className || ''}` }, props)),
            showIcon && (React.createElement(CheckCircle, { size: 16, className: styles.icon }))),
        React.createElement("span", { id: `${id}-hint`, className: error ? styles.error : styles.hint }, error ? error : hint || '\u00A0')));
};
export default InputText;
// return (
//     // <div className={styles['input-wrapper']}>
//     //   {label && (
//     //     <BasicLabel htmlFor={label}>
//     //       {label}
//     //       {required && <strong> *</strong>}
//     //     </BasicLabel>
//     //   )}
//       <BasicInput
//         required={required}
//         aria-describedby={label}
//         className={`${styles.input} ${className || ''}`}
//         {...props}
//       />
//       // {showIcon && (
//       //   <CheckCircle
//       //     size={16}
//       //     className={styles['input-icon']}
//       //   />
//       // )}
//       {/* <input
//             required={required}
//             aria-describedby={label}
//             className={`${className || ''}
//             //  ${error ? styles['user-invalid'] : ''}`}
//             {...props}
//           />
//            */}
//       // {error && <span className={styles.errorMessage}>{error}</span>}
//       {/* {hasError ? (
//           <label className={styles['input-error']}>
//             {errors[id]?.message?.toString()}
//           </label>
//         ) : (
//           hint && <label className={styles['input-hint']}>{hint}</label>
//         )} */}
//     // </div>
//   );
