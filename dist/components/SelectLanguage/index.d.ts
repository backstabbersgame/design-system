import React from 'react';
type LocaleType = 'pt-BR' | 'en';
type SelectLanguageProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    options: {
        value: LocaleType;
        label: string;
    }[];
    currentLocale: LocaleType;
    onLocaleChange: (locale: LocaleType) => void;
    colorMode?: 'light' | 'dark';
};
export declare const SelectLanguage: React.FC<SelectLanguageProps>;
export default SelectLanguage;
//# sourceMappingURL=index.d.ts.map