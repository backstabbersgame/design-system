import React from 'react';
import Link from 'next/link';
import styles from './ButtonSpecial.module.scss';

interface ButtonSpecialProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  size?: 'small' | 'big';
  className?: string;
}

const isInternal = (href: string) => href.startsWith('/');

const ButtonSpecial = ({
  icon,
  label,
  href,
  size = 'small',
  className,
  ...props
}: ButtonSpecialProps) => {
  const content = (
    <>
      {icon}
      <span
        className={`${styles.label} ${
          size === 'big' ? styles.big : styles.small
        }`}
      >
        {label}
      </span>
    </>
  );

  if (isInternal(href)) {
    return (
      <Link
        href={href}
        className={`${styles.link} ${className || ''} ${
          size === 'big' ? styles.big : styles.small
        }`}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${styles.link} ${className || ''} ${
        size === 'big' ? styles.big : styles.small
      }`}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    >
      {content}
    </a>
  );
};

export default ButtonSpecial;
