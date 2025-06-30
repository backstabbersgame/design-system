import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    href?: string;
  };

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & {
    href?: string;
  };

export type BasicButtonProps = ButtonProps | AnchorProps;

export const BasicButton: React.FC<BasicButtonProps> = ({
  children,
  className,
  href,
  ...props
}) => {
  const combinedClassName = `${styles.button} ${className || ''}`;
  const isInternal = href && href.startsWith('/');

  if (href) {
    if (isInternal) {
      return (
        <Link
          href={href}
          passHref
          legacyBehavior
        >
          <a
            className={combinedClassName}
            {...(props as AnchorProps)}
          >
            {children}
          </a>
        </Link>
      );
    }
    return (
      <a
        className={combinedClassName}
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        {...(props as AnchorProps)}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      className={combinedClassName}
      {...(props as ButtonProps)}
    >
      {children}
    </button>
  );
};

export default BasicButton;
