import React from 'react';
import styles from './index.module.scss';

type LocaleType = 'pt-BR' | 'en';

type SelectLanguageProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: { value: LocaleType; label: string }[];
  currentLocale: LocaleType;
  onLocaleChange: (locale: LocaleType) => void;
  colorMode?: 'light' | 'dark';
};

export const SelectLanguage: React.FC<SelectLanguageProps> = ({
  options,
  currentLocale,
  onLocaleChange,
  className,
  colorMode = 'dark',
  ...props
}) => {
  const flag = currentLocale === 'pt-BR' ? '🇧🇷' : '🇺🇸';
  const aria =
    currentLocale === 'pt-BR' ? 'Selecionar idioma' : 'Select language';

  return (
    <div
      className={`${styles.languageSelect} ${
        colorMode === 'light' ? styles.light : styles.dark
      } ${className || ''}`}
    >
      <button
        type='button'
        className={styles.flagButton}
        aria-label={aria}
      >
        <span className={styles.flag}>{flag}</span>
      </button>
      <select
        className={`${styles.nativeSelect} ${className || ''}`}
        onChange={(e) => onLocaleChange(e.target.value as LocaleType)}
        value={currentLocale}
        aria-label={aria}
        {...props}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectLanguage;
