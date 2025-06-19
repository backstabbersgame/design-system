import React from 'react';
import styles from './ButtonSpecial.module.scss';

interface ButtonSpecialProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  size?: 'small' | 'big';
  className?: string;
}

const ButtonSpecial = ({
  icon,
  label,
  href,
  size = 'small',
  className,
  ...props
}: ButtonSpecialProps) => {
  return (
    <a
      href={href}
      className={`${styles.link}  ${className || ''} ${
        size === 'big' ? styles.big : styles.small
      }`}
      {...props}
    >
      {icon}
      <span
        className={`${styles.label} ${
          size === 'big' ? styles.big : styles.small
        }`}
      >
        {label}
      </span>
    </a>
  );
};

export default ButtonSpecial;
