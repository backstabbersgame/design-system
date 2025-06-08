import React, { useState } from 'react';
import styles from './Upload.module.scss';
import { Plus, X, XCircle } from '@phosphor-icons/react/dist/ssr';

type UploadProps = {
  value?: File | null;
  onChange?: (file: File | null | undefined) => void;
  accept?: string;
  // multiple?: boolean;
  className?: string;
  error?: string;
};

const MAX_FILE_SIZE_KB = 1024;
const MAX_FILE_SIZE_LABEL = '1 MB';

const ALLOWED_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'application/pdf',
  'text/plain',
  'text/csv',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];

export const Upload: React.FC<UploadProps> = ({
  value = [],
  onChange,
  accept = '.jpg,.jpeg,.png,.gif,.pdf,.txt,.csv,.xls,.xlsx,.doc,.docx',
  // multiple = true,
  className,
  error,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0] || null;
    if (!selected) {
      if (onChange) onChange(null);
      return;
    }
    const sizeKb = selected.size / 1024;
    if (sizeKb > MAX_FILE_SIZE_KB) {
      if (onChange) onChange(null);
      return;
    }
    if (!ALLOWED_TYPES.includes(selected.type)) {
      if (onChange) onChange(null);
      return;
    }
    if (onChange) onChange(selected);
  };

  const removeFile = () => {
    if (onChange) onChange(null);
  };

  return (
    <div className={styles.border}>
      <div className={styles.wrapper}>
        <div className={styles.control}>
          <label className={`${styles.button} ${className || ''}`}>
            <Plus size={24} />
            Adicionar arquivo
            <input
              type='file'
              // multiple={multiple}
              accept={accept}
              onChange={handleFileChange}
              hidden
            />
          </label>
        </div>
      </div>
      <div className={styles.files}>
        {value && (
          <ul className={styles.fileList}>
            <li className={styles.fileItem}>
              <div className={styles.thumbnail} />
              <div className={styles.fileDetails}>
                <p className={styles.fileDetailsP}>
                  {value instanceof File ? value.name : ''}
                </p>
                <span className={styles.fileDetailsP}>
                  {value instanceof File
                    ? (value.size / 1024 / 1024).toFixed(2) + ' MB'
                    : ''}
                </span>
              </div>
              <button
                onClick={removeFile}
                className={styles.removeFile}
                aria-label='Remover arquivo'
              >
                <X size={16} />
              </button>
            </li>
          </ul>
        )}
        {error && <div className={styles.fileError}>{error}</div>}
      </div>
    </div>
  );
};

export default Upload;

//  <input
//       type='file'
//       className={`${styles.input} ${className || ''}`}
//       {...props}
//     />
