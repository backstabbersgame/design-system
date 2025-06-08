import React from 'react';
interface InputTextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
}
export declare const InputTextArea: React.FC<InputTextAreaProps>;
export default InputTextArea;
