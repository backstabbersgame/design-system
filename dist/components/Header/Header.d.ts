import React from 'react';
interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    links: {
        name: string;
        href: string;
    }[];
    activeLink?: string;
    onLogoClick?: () => void;
    onMenuClick?: () => void;
    onLinkClick?: (href: string) => void;
    onAccountClick?: () => void;
}
export declare const Header: React.FC<HeaderProps>;
export default Header;
