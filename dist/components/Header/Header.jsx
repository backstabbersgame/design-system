import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';
export const Header = ({ links, activeLink, onLogoClick, onMenuClick, onLinkClick, onAccountClick, }) => {
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
    return (<BasicHeader className={styles.header}>
      <Image width={isMobile ? 116 : 145} height={isMobile ? 32 : 40} src='/images/solara-horizontal-light.svg' alt='Solara Studios Logo with light colors' onClick={handleLogoClick} style={{ cursor: 'pointer' }}/>

      {isMobile ? (<button onClick={handleMenuClick} className={styles.list}>
          <List size={24} className={styles.icon}/>
        </button>) : (<div className={styles.side}>
          <BasicNav className={styles.nav} links={links} mode='light' activeLink={activeLink} onLinkClick={onLinkClick}/>
          <Button variant='cta' type='button' onClick={handleAccountClick}>
            Minha Conta
          </Button>
        </div>)}
    </BasicHeader>);
};
export default Header;
