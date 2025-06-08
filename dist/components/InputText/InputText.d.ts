import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    disabled?: boolean;
    showIcon?: boolean;
}
export declare const InputText: React.FC<InputProps>;
export default InputText;
//# sourceMappingURL=InputText.d.ts.map