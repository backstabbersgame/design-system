import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { List } from '@phosphor-icons/react/dist/ssr';
import { HeaderProps } from '../../types/header';

export const Header: React.FC<HeaderProps> = ({
  variant = 'solara',
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
  const isTablet = currentBreakpoint === 'tablet';

  const handleImageWidth = (): number => {
    switch (variant) {
      case 'solara':
        return isMobile || isTablet ? 116 : 145;
      case 'backstabbers':
        return isMobile ? 124.07 : isTablet ? 93.05 : 155.09;
      case 'ordem':
        return isMobile || isTablet ? 54.53 : 68.16;
      case 'rebeliao':
        return isMobile || isTablet ? 57.41 : 70.5;
      case 'armada':
        return isMobile || isTablet ? 89.7 : 112.12;
    }
  };

  const handleImageHeight = (): number => {
    switch (variant) {
      case 'solara':
        return isMobile || isTablet ? 32 : 40;
      case 'backstabbers':
        return isMobile ? 32 : isTablet ? 24 : 40;
      case 'ordem':
        return isMobile || isTablet ? 32 : 40;
      case 'rebeliao':
        return isMobile || isTablet ? 32.66 : 39.33;
      case 'armada':
        return isMobile || isTablet ? 32 : 40;
    }
  };

  const handleHeaderImage = (): string => {
    switch (variant) {
      case 'solara':
        return `${basePath}/images/solara-horizontal-light.svg`;
      case 'backstabbers':
        return `${basePath}/images/backstabbers.svg`;
      case 'ordem':
        return `${basePath}/images/ordem.svg`;
      case 'rebeliao':
        return `${basePath}/images/rebeliao.svg`;
      case 'armada':
        return `${basePath}/images/armada.svg`;
    }
  };

  const handleAltImage = (): string => {
    switch (variant) {
      case 'solara':
        return 'Logo da Solara Studios bege';
      case 'backstabbers':
        return 'Capa do jogo Backstabbers';
      case 'ordem':
        return 'Capa do jogo Ordem ao caos';
      case 'rebeliao':
        return 'Capa do jogo Rebelião dos Gatos';
      case 'armada':
        return 'Capa do jogo Armada dos Cães';
    }
  };

  return (
    <BasicHeader
      className={variant !== 'solara' ? styles['header-games'] : styles.header}
    >
      <div
        onClick={onLogoClick}
        tabIndex={0}
        role='button'
        aria-label='Ir para início'
        className={styles.logo}
      >
        <Image
          width={handleImageWidth()}
          height={handleImageHeight()}
          src={handleHeaderImage()}
          alt={handleAltImage()}
        />
      </div>
      {isMobile || isTablet ? (
        <button
          onClick={onMenuClick}
          aria-label='Abrir menu'
          className={styles.list}
        >
          <List
            size={24}
            className={
              variant !== 'solara' ? styles['icon-games'] : styles.icon
            }
          />
        </button>
      ) : (
        <div className={styles.side}>
          <BasicNav
            links={links}
            activeLink={activeLink}
            onLinkClick={onLinkClick}
            mode={variant !== 'solara' ? 'dark' : 'light'}
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
