import React, { useRef } from 'react';
import styles from './Upload.module.scss';
import { PlusIcon, XIcon } from '@phosphor-icons/react/dist/ssr';

type UploadProps = {
  value?: File[];
  onChange?: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  error?: string;
};

const MAX_FILE_SIZE_MB = 1;
const MAX_FILES = 5;

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
  accept = ALLOWED_TYPES.join(','),
  multiple = true,
  className,
  error,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    let filesArray = Array.from(files);

    // Filtra arquivos inválidos
    let validFiles = filesArray.filter(
      (file) =>
        ALLOWED_TYPES.includes(file.type) &&
        file.size <= MAX_FILE_SIZE_MB * 1024 * 1024
    );

    // Junta com os já selecionados, sem duplicar nomes
    let newFiles = [...(value || [])];
    validFiles.forEach((file) => {
      if (!newFiles.some((f) => f.name === file.name && f.size === file.size)) {
        newFiles.push(file);
      }
    });

    if (newFiles.length > MAX_FILES) {
      newFiles = newFiles.slice(0, MAX_FILES);
    }

    if (onChange) onChange(newFiles);

    // Limpa input para permitir re-upload do mesmo arquivo se removido
    if (inputRef.current) inputRef.current.value = '';
  };

  const removeFile = (index: number) => {
    if (onChange) onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.border}>
      <div className={styles.wrapper}>
        <div className={styles.control}>
          <label className={`${styles.button} ${className || ''}`}>
            <PlusIcon size={24} />
            Adicionar arquivo
            <input
              ref={inputRef}
              type='file'
              multiple={multiple}
              accept={accept}
              onChange={handleFileChange}
              hidden
              {...props}
            />
          </label>
        </div>
      </div>
      <div className={styles.files}>
        {value && value.length > 0 && (
          <ul className={styles.fileList}>
            {value.map((file, idx) => (
              <li
                className={styles.fileItem}
                key={file.name + file.size + idx}
              >
                <div className={styles.thumbnail} />
                <div className={styles.fileDetails}>
                  <p className={styles.fileDetailsP}>{file.name}</p>
                  <span className={styles.fileDetailsP}>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>
                <button
                  type='button'
                  onClick={() => removeFile(idx)}
                  className={styles.removeFile}
                  aria-label='Remover arquivo'
                >
                  <XIcon size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
        {error && <div className={styles.fileError}>{error}</div>}
      </div>
    </div>
  );
};

export default Upload;
