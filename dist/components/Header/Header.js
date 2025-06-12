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
    return (React.createElement(BasicHeader, { className: styles.header },
        React.createElement("div", { onClick: onLogoClick, tabIndex: 0, role: 'button', "aria-label": 'Ir para in\u00EDcio', style: { cursor: 'pointer' } },
            React.createElement(Image, { width: isMobile ? 116 : 145, height: isMobile ? 32 : 40, src: `${basePath}/images/solara-horizontal-light.svg`, alt: 'Solara Studios Logo com cores claras' })),
        isMobile ? (React.createElement("button", { onClick: onMenuClick, "aria-label": 'Abrir menu', className: styles.list },
            React.createElement(List, { size: 24, className: styles.icon }))) : (React.createElement("div", { className: styles.side },
            React.createElement(BasicNav, { links: links, activeLink: activeLink, onLinkClick: onLinkClick, mode: 'light' })))));
};
export default Header;
