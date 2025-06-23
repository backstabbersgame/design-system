import React, { SelectHTMLAttributes } from 'react';
import styles from './InputSelect.module.scss';
import BasicLabel from '../../core/label';
import BasicSelect from '../../core/select';

export interface InputTextProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  placeholder?: string;
  options: { value: string; label: string; disabled?: boolean }[];
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
}

const InputSelect: React.FC<InputTextProps> = ({
  label,
  placeholder,
  options,
  hint,
  error,
  required = false,
  disabled = false,
  id,
  className,
  ...props
}) => {
  return (
    <div className={styles.container}>
      {label && (
        <BasicLabel htmlFor={id}>
          {label}
          {required && <BasicLabel className={styles.required}></BasicLabel>}
        </BasicLabel>
      )}
      <div className={styles.field}>
        <BasicSelect
          id={id}
          options={options}
          disabled={disabled}
          className={`${styles['basic-select']}
          ${error ? styles['user-invalid'] : undefined}
          ${className || ''}`}
          {...props}
        />
      </div>
      <span
        id={`${id}-hint`}
        className={error ? styles.error : styles.hint}
      >
        {error ? error : hint || '\u00A0'}
      </span>
    </div>
  );
};

export default InputSelect;
