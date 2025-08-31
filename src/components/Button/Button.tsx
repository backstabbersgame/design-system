import React from 'react';
import styles from './Button.module.scss';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDownIcon,
  ArrowUpIcon,
} from '@phosphor-icons/react/dist/ssr';
import BasicButton, { BasicButtonProps } from '../../core/button';
import { Icon } from '@phosphor-icons/react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'cta';

export type ButtonProps = BasicButtonProps & {
  variant?: ButtonVariant;
  arrowLeft?: boolean;
  arrowRight?: boolean;
  arrowDown?: boolean;
  arrowUp?: boolean;
  href?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  arrowLeft = false,
  arrowRight = false,
  arrowDown = false,
  arrowUp = false,
  href,
  className,
  children,
  ...props
}) => {
  const handleArrow = arrowUp
    ? ArrowUpIcon
    : arrowDown
    ? ArrowDownIcon
    : ArrowRightIcon;

  const renderArrow = (Arrow: Icon) => {
    return (
      <Arrow
        size={24}
        className={styles.arrow}
      />
    );
  };

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
      {renderArrow(handleArrow)}
    </BasicButton>
  );
};

export default Button;
