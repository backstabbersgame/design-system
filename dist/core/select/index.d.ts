import React from 'react';
type BasicSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    placeholder?: string;
    multiple?: boolean;
};
export declare const BasicSelect: React.FC<BasicSelectProps>;
export default BasicSelect;
//# sourceMappingURL=index.d.ts.map