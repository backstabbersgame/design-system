import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';
import { Link } from '../../types/link';
import { HeaderProps } from '../../types/header';


export const Header: React.FC<HeaderProps> = ({
  links,
  activeLink,
  onLogoClick,
  onMenuClick,
  onLinkClick,
  onAccountClick,
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';

  return (
    <BasicHeader className={styles.header}>
      <div
        onClick={onLogoClick}
        tabIndex={0}
        role='button'
        aria-label='Ir para início'
        style={{ cursor: 'pointer' }}
      >
        <Image
          width={isMobile ? 116 : 145}
          height={isMobile ? 32 : 40}
          src={`${basePath}/images/solara-horizontal-light.svg`}
          alt='Solara Studios Logo com cores claras'
        />
      </div>
      {isMobile ? (
        <button
          onClick={onMenuClick}
          aria-label='Abrir menu'
          className={styles.list}
        >
          <List
            size={24}
            className={styles.icon}
          />
        </button>
      ) : (
        <div className={styles.side}>
          <BasicNav
            links={links}
            activeLink={activeLink}
            onLinkClick={onLinkClick}
            mode='light'
          />
          {/* <Button
            variant='cta'
            type='button'
            onClick={onAccountClick}
          >
            Minha Conta
          </Button> */}
        </div>
      )}
    </BasicHeader>
  );
};

export default Header;
