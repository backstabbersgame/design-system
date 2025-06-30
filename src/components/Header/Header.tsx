import React from 'react';
import Image from 'next/image';
import BasicHeader from '../../core/header';
import BasicNav from '../../core/nav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { ListIcon } from '@phosphor-icons/react/dist/ssr';
import { HeaderProps } from '../../types/header';
import BackButton from '../BackButton/BackButton';

export const Header: React.FC<HeaderProps> = ({
  variant = 'solara',
  links,
  activeLink,
  onLogoClick,
  onMenuClick,
  onLinkClick,
  onAccountClick,
  isSubpage,
  subpageLink,
  pageLink,
  gameTitle,
  pageTitle,
  pathname,
  onBack,
}) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const isMobileOrTablet = isMobile || isTablet;

  // console.log({ pathname });

  const showLogo =
    pathname === '/' ||
    pathname === '/jogos/backstabbers' ||
    pathname === '/jogos/ordem-ao-caos' ||
    pathname === '/jogos/rebeliao-dos-gatos' ||
    pathname === '/jogos/armada-dos-caes' ||
    pathname === '/jogos/decodica';

  const handleImageWidth = (): number => {
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
    }
  };

  const handleImageHeight = (): number => {
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
    }
  };

  const handleHeaderImage = (): string => {
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
    }
  };

  const handleAltImage = (): string => {
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
    }
  };

  const handlePageName = () => {
    // console.log({ showLogo, variant, isTablet, isMobile });
    if (!showLogo && variant !== 'solara' && (isTablet || isMobile)) {
      return (
        <div className={styles.texts}>
          <p className={styles['game-title']}>{gameTitle}</p>
          <h2 className={styles['page-title']}>{pageTitle}</h2>
        </div>
      );
    }
  };

  return (
    <BasicHeader
      className={variant !== 'solara' ? styles['header-games'] : styles.header}
    >
      {showLogo || !isMobileOrTablet ? (
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
      ) : (
        <BackButton
          onClick={onBack}
          tabIndex={0}
          aria-label='Voltar'
        />
      )}
      {handlePageName()}
      {isMobileOrTablet ? (
        <button
          onClick={onMenuClick}
          aria-label='Abrir menu'
          className={styles.list}
        >
          <ListIcon
            size={24}
            className={
              variant !== 'solara' ? styles['icon-games'] : styles.icon
            }
          />
        </button>
      ) : (
        <div className={styles.side}>
          <BasicNav
            variant={variant}
            links={links}
            activeLink={activeLink}
            onLinkClick={onLinkClick}
            mode={variant !== 'solara' ? 'dark' : 'light'}
            isSubpage={isSubpage}
            subpageLink={subpageLink}
            pageLink={pageLink}
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
