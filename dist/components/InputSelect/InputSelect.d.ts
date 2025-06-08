import React, { SelectHTMLAttributes } from 'react';
export interface InputTextProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    placeholder?: string;
    options: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
}
declare const InputSelect: React.FC<InputTextProps>;
export default InputSelect;
