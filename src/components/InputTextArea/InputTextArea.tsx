import React, { useEffect, useRef, useState } from 'react';
import styles from './InputTextArea.module.scss';
import BasicLabel from '../../core/label';
import BasicTextArea from '../../core/text-area';

interface InputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
}

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  label,
  hint,
  error,
  required = false,
  id,
  className,
  value,
  onChange,
  ...props
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [charCount, setCharCount] = useState(
    typeof value === 'string' ? value.length : 0
  );
  const max = 500;

  useEffect(() => {
    if (typeof value === 'string') {
      setCharCount(value.length);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharCount(e.target.value.length);
    if (onChange) onChange(e);
  };

  return (
    <div className={styles.container}>
      {label && (
        <BasicLabel htmlFor={id}>
          {label}
          {required && <BasicLabel className={styles.required}></BasicLabel>}
        </BasicLabel>
      )}
      <div className={styles.field}>
        <BasicTextArea
          ref={textareaRef}
          id={id}
          required={required}
          aria-describedby={hint ? `${id}-hint` : undefined}
          className={`${styles.textarea}
          ${error ? styles['user-invalid'] : ''}
          ${className || ''}`}
          maxLength={max}
          value={value}
          onChange={handleChange}
          {...props}
        />
      </div>
      <div className={styles['sub-field']}>
        <span
          id={`${id}-hint`}
          className={error ? styles.error : styles.hint}
        >
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
    </div>
  );
};

export default InputTextArea;
