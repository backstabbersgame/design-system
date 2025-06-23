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
import React, { useRef } from 'react';
import styles from './Upload.module.scss';
import { PlusIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
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
export const Upload = (_a) => {
    var { value = [], onChange, accept = ALLOWED_TYPES.join(','), multiple = true, className, error } = _a, props = __rest(_a, ["value", "onChange", "accept", "multiple", "className", "error"]);
    const inputRef = useRef(null);
    const handleFileChange = (event) => {
        const files = event.target.files;
        if (!files)
            return;
        let filesArray = Array.from(files);
        // Filtra arquivos inválidos
        let validFiles = filesArray.filter((file) => ALLOWED_TYPES.includes(file.type) &&
            file.size <= MAX_FILE_SIZE_MB * 1024 * 1024);
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
        if (onChange)
            onChange(newFiles);
        // Limpa input para permitir re-upload do mesmo arquivo se removido
        if (inputRef.current)
            inputRef.current.value = '';
    };
    const removeFile = (index) => {
        if (onChange)
            onChange(value.filter((_, i) => i !== index));
    };
    return (React.createElement("div", { className: styles.border },
        React.createElement("div", { className: styles.wrapper },
            React.createElement("div", { className: styles.control },
                React.createElement("label", { className: `${styles.button} ${className || ''}` },
                    React.createElement(PlusIcon, { size: 24 }),
                    "Adicionar arquivo",
                    React.createElement("input", Object.assign({ ref: inputRef, type: 'file', multiple: multiple, accept: accept, onChange: handleFileChange, hidden: true }, props))))),
        React.createElement("div", { className: styles.files },
            value && value.length > 0 && (React.createElement("ul", { className: styles.fileList }, value.map((file, idx) => (React.createElement("li", { className: styles.fileItem, key: file.name + file.size + idx },
                React.createElement("div", { className: styles.thumbnail }),
                React.createElement("div", { className: styles.fileDetails },
                    React.createElement("p", { className: styles.fileDetailsP }, file.name),
                    React.createElement("span", { className: styles.fileDetailsP },
                        (file.size / 1024 / 1024).toFixed(2),
                        " MB")),
                React.createElement("button", { type: 'button', onClick: () => removeFile(idx), className: styles.removeFile, "aria-label": 'Remover arquivo' },
                    React.createElement(XIcon, { size: 16 }))))))),
            error && React.createElement("div", { className: styles.fileError }, error))));
};
export default Upload;
