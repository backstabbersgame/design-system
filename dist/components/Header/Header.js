import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';
export const Header = ({ links, activeLink, onLogoClick, onMenuClick, onLinkClick, onAccountClick, }) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const { currentBreakpoint } = useBreakpoint();
    const isMobile = currentBreakpoint === 'mobile';
    const handleLogoClick = () => {
        onLogoClick === null || onLogoClick === void 0 ? void 0 : onLogoClick();
    };
    const handleMenuClick = () => {
        onMenuClick === null || onMenuClick === void 0 ? void 0 : onMenuClick();
    };
    const handleAccountClick = () => {
        onAccountClick === null || onAccountClick === void 0 ? void 0 : onAccountClick();
    };
    return (React.createElement(BasicHeader, { className: styles.header },
        React.createElement(Image, { width: isMobile ? 116 : 145, height: isMobile ? 32 : 40, src: `${basePath}/images/solara-horizontal-light.svg`, alt: 'Solara Studios Logo with light colors', onClick: handleLogoClick, style: { cursor: 'pointer' } }),
        isMobile ? (React.createElement("button", { onClick: handleMenuClick, className: styles.list },
            React.createElement(List, { size: 24, className: styles.icon }))) : (React.createElement("div", { className: styles.side },
            React.createElement(BasicNav, { className: styles.nav, links: links, mode: 'light', activeLink: activeLink, onLinkClick: onLinkClick })))));
};
export default Header;
