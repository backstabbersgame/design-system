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
    return (<div className={styles.container}>
      {label && (<BasicLabel htmlFor={id}>
          {label}
          {required && <BasicLabel className={styles.required}></BasicLabel>}
        </BasicLabel>)}
      <div className={styles.field}>
        <BasicSelect id={id} options={options} disabled={disabled} {...props}/>
      </div>
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
    </div>);
    // return (
    //   <div className={styles['select-wrapper']}>
    //     {label && (
    //       <label className={styles['select-label']}>
    //         {label}
    //         {isRequired && <strong> *</strong>}
    //       </label>
    //     )}
    //     <div className={styles['select-container']}>
    //       <div className={styles['select-field-container']}>
    //         <select
    //           className={`${styles['select-field']} ${
    //             error ? styles['user-invalid'] : ''
    //           }
    //                ${className || ''}
    //             ${selected === '' ? styles['placeholder'] : ''}
    //           `}
    //           onChange={(e) => setSelected(e.target.value)}
    //           disabled={isDisabled}
    //           required={isRequired}
    //           aria-invalid={!!error}
    //           aria-describedby={label}
    //           defaultValue=''
    //           {...props}
    //         >
    //           <option
    //             value={''}
    //             disabled
    //           >
    //             {placeholder}
    //           </option>
    //           {options?.map((option) => (
    //             <option
    //               key={option.value}
    //               value={option.value}
    //             >
    //               {option.label}
    //             </option>
    //           ))}
    //         </select>
    //         {error ? (
    //           <label className={styles['select-error']}>{error}</label>
    //         ) : (
    //           hint && <label className={styles['select-hint']}>{hint}</label>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // );
};
export default InputSelect;
