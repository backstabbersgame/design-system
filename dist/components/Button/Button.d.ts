import React from 'react';
import { BasicButtonProps } from '../../core/button';
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link' | 'cta';
export type ButtonProps = BasicButtonProps & {
    variant?: ButtonVariant;
    arrowLeft?: boolean;
    arrowRight?: boolean;
    href?: string;
};
export declare const Button: React.FC<ButtonProps>;
export default Button;
