import React from 'react';
type CommonProps = {
    children: React.ReactNode;
    className?: string;
};
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps & {
    href?: string;
};
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & CommonProps & {
    href?: string;
};
export type BasicButtonProps = ButtonProps | AnchorProps;
export declare const BasicButton: React.FC<BasicButtonProps>;
export default BasicButton;
//# sourceMappingURL=index.d.ts.map