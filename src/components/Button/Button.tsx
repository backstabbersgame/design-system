import React from 'react';
import styles from './Button.module.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import BasicButton, { BasicButtonProps } from '../../core/button';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'cta';

export type ButtonProps = BasicButtonProps & {
  variant?: ButtonVariant;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  href?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  arrowLeft = false,
  arrowRight = false,
  href,
  className,
  children,
  ...props
}) => {
  return (
    <BasicButton
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
      href={href}
      {...props}
    >
      {arrowLeft && (
        <ArrowLeftIcon
          size={24}
          className={styles.arrow}
        />
      )}
      {children}
      {arrowRight && (
        <ArrowRightIcon
          size={24}
          className={styles.arrow}
        />
      )}
    </BasicButton>
  );
};

export default Button;
