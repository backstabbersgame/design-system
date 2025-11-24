import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { ListIcon } from '@phosphor-icons/react/dist/ssr';
import BackButton from '../BackButton/BackButton';
import SelectLanguage from '../SelectLanguage';
export const Header = ({ variant = 'solara', links, activeLink, onLogoClick, onMenuClick, onLinkClick, onAccountClick, isSubpage, subpageLink, pageLink, gameTitle, pageTitle, pathname, onBack, currentLocale = 'pt-BR', onLocaleChange, options, colorMode, }) => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    const { currentBreakpoint } = useBreakpoint();
    const isMobile = currentBreakpoint === 'mobile';
    const isTablet = currentBreakpoint === 'tablet';
    const isMobileOrTablet = isMobile || isTablet;
    const showLogo = pathname === '/' ||
        pathname === '/jogos/backstabbers' ||
        pathname === '/jogos/ordem-ao-caos' ||
        pathname === '/jogos/rebeliao-dos-gatos' ||
        pathname === '/jogos/armada-dos-caes' ||
        pathname === '/jogos/decodica' ||
        pathname === '/jogos/drag-slay';
    const handleImageWidth = () => {
        switch (variant) {
            case 'solara':
                return isMobileOrTablet ? 116 : 145;
            case 'backstabbers':
                return isMobile ? 124.07 : isTablet ? 93.05 : 155.09;
            case 'ordem':
                return isMobileOrTablet ? 54.53 : 68.16;
            case 'rebeliao':
                return isMobileOrTablet ? 57.41 : 70.5;
            case 'armada':
                return isMobileOrTablet ? 89.7 : 112.12;
            case 'decodica':
                return isMobileOrTablet ? 58.33 : 72.91;
            case 'drag':
                return isMobileOrTablet ? 58.33 : 26.6;
        }
    };
    const handleImageHeight = () => {
        switch (variant) {
            case 'solara':
                return isMobileOrTablet ? 32 : 40;
            case 'backstabbers':
                return isMobile ? 32 : isTablet ? 24 : 40;
            case 'ordem':
                return isMobileOrTablet ? 32 : 40;
            case 'rebeliao':
                return isMobileOrTablet ? 32.66 : 39.33;
            case 'armada':
                return isMobileOrTablet ? 32 : 40;
            case 'decodica':
                return isMobileOrTablet ? 32.01 : 40.01;
            case 'drag':
                return isMobileOrTablet ? 21.29 : 40.01;
        }
    };
    const handleHeaderImage = () => {
        switch (variant) {
            case 'solara':
                return `${basePath}/images/logos/solara-horizontal-light.svg`;
            case 'backstabbers':
                return `${basePath}/images/logos/backstabbers.svg`;
            case 'ordem':
                return `${basePath}/images/logos/ordem.svg`;
            case 'rebeliao':
                return `${basePath}/images/logos/rebeliao.svg`;
            case 'armada':
                return `${basePath}/images/logos/armada.svg`;
            case 'decodica':
                return `${basePath}/images/logos/decodica.svg`;
            case 'drag':
                return `${basePath}/images/logos/drag.svg`;
        }
    };
    const handleAltImage = () => {
        switch (variant) {
            case 'solara':
                return 'Logo da Solara Studios';
            case 'backstabbers':
                return 'Logo Backstabbers';
            case 'ordem':
                return 'Logo Ordem ao caos';
            case 'rebeliao':
                return 'Logo Rebelião dos Gatos';
            case 'armada':
                return 'Logo Armada dos Cães';
            case 'decodica':
                return 'Logo Decodica';
            case 'drag':
                return 'Logo Drag Slay';
        }
    };
    const handlePageName = () => {
        // console.log({ showLogo, variant, isTablet, isMobile });
        if (!showLogo && variant !== 'solara' && (isTablet || isMobile)) {
            return (React.createElement("div", { className: styles.texts },
                React.createElement("p", { className: styles['game-title'] }, gameTitle),
                React.createElement("h2", { className: styles['page-title'] }, pageTitle)));
        }
    };
    return (React.createElement(BasicHeader, { className: variant !== 'solara' ? styles['header-games'] : styles.header },
        showLogo || !isMobileOrTablet || variant === 'solara' ? (React.createElement("div", { onClick: onLogoClick, tabIndex: 0, role: 'button', "aria-label": 'Ir para in\u00EDcio', className: styles.logo },
            React.createElement(Image, { width: handleImageWidth(), height: handleImageHeight(), src: handleHeaderImage(), alt: handleAltImage() }))) : (React.createElement(BackButton, { onClick: onBack, tabIndex: 0, "aria-label": 'Voltar' })),
        handlePageName(),
        isMobileOrTablet ? (React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
            React.createElement(SelectLanguage, { options: options, currentLocale: currentLocale, onLocaleChange: onLocaleChange, colorMode: colorMode }),
            React.createElement("button", { onClick: onMenuClick, "aria-label": 'Abrir menu', className: styles.list },
                React.createElement(ListIcon, { size: 24, className: variant !== 'solara' ? styles['icon-games'] : styles.icon })))) : (React.createElement("div", { className: styles.side },
            React.createElement(BasicNav, { variant: variant, links: links, activeLink: activeLink, onLinkClick: onLinkClick, mode: variant !== 'solara' ? 'dark' : 'light', isSubpage: isSubpage, subpageLink: subpageLink, pageLink: pageLink }),
            React.createElement(SelectLanguage, { options: options, currentLocale: currentLocale, onLocaleChange: onLocaleChange, colorMode: colorMode })))));
};
export default Header;
