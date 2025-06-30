import React, { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  CaretDownIcon,
  CaretUpIcon,
  SignOutIcon,
  XIcon,
} from '@phosphor-icons/react/dist/ssr';
import styles from './ModalMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button/Button';
import { ModalItem, ModalMenuProps, SubItem } from '../../types/modal';
import { defaultMenuItems, defaultFooterItems } from '../../constants';

const ModalMenu: React.FC<ModalMenuProps> = ({
  showHeader = true,
  isGame,
  gameTitle,
  title = 'Menu',
  isOpen,
  onClose,
  activeItem,
  onItemSelect,
  isSubpage,
  footerButton,
  logoutButton,
  customItems,
  customFooterItems,
  openSubMenu,
  onToggleSubMenu,
  onNavigate,
}) => {
  const items = customItems || defaultMenuItems;

  const footerItems = customFooterItems || defaultFooterItems;

  const isItemActive = (item: ModalItem) => {
    if (item.hasSubMenu) {
      return (
        item.id === activeItem ||
        item.subItems?.some((sub) => sub.id === activeItem)
      );
    }
    return item.id === activeItem;
  };

  const scrollOrNavigate = (href?: string) => {
    if (!href) return;
    if (href.startsWith('#')) {
      const target = document.getElementById(href.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      onNavigate?.(href);
      onClose();
    } else {
      onNavigate ? onNavigate(href) : (window.location.href = href);
      onClose();
    }
  };

  const handleItemClick = (item: ModalItem) => {
    if (item.hasSubMenu) {
      onToggleSubMenu?.(openSubMenu === item.id ? undefined : item.id);
      onItemSelect(item.id);
    } else if (item.href) {
      scrollOrNavigate(item.href);
      onItemSelect(item.id);
      onToggleSubMenu?.(undefined);
    }
  };

  const handleSubItemClick = (subItem: SubItem) => {
    scrollOrNavigate(subItem.href);
    onItemSelect(subItem.id);
    onToggleSubMenu?.(undefined);
  };

  const handleButtonAction = (href: string, customAction?: () => void) => {
    if (customAction) {
      customAction();
    } else {
      scrollOrNavigate(href);
    }
    onClose();
  };

  const renderSubMenu = (item: ModalItem) => (
    <AnimatePresence>
      {openSubMenu === item.id && (
        <motion.ul
          id={`submenu-${item.id}`}
          className={styles.submenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          {item.subItems?.map((subItem) => (
            <li
              key={subItem.id}
              className={`${styles['submenu-item']} ${
                activeItem === subItem.id ? styles.active : ''
              }`}
            >
              <button
                type='button'
                onClick={() => handleSubItemClick(subItem)}
                className={styles['submenu-button']}
              >
                {subItem.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  );

  const renderFooter = () => {
    return (
      <div className={styles['container-footer']}>
        {isSubpage && (
          <ul className={styles['list-footer']}>
            {footerItems.map((footerItem, index) => {
              const isInternal =
                footerItem.href && footerItem.href.startsWith('/');
              return (
                <React.Fragment key={footerItem.id}>
                  <li
                    className={styles.item}
                    role='link'
                  >
                    {isInternal && footerItem.href ? (
                      <Link
                        href={footerItem.href}
                        passHref
                        legacyBehavior
                      >
                        <a className={styles['link-footer']}>
                          <span className={styles['icon-label']}>
                            {footerItem.icon}
                            <span className={styles.label}>
                              {footerItem.label}
                            </span>
                          </span>
                        </a>
                      </Link>
                    ) : (
                      <a
                        className={styles['link-footer']}
                        href={footerItem.href}
                        rel='noopener noreferrer'
                      >
                        <span className={styles['icon-label']}>
                          {footerItem.icon}
                          <span className={styles.label}>
                            {footerItem.label}
                          </span>
                        </span>
                      </a>
                    )}
                  </li>
                  {index < footerItems.length - 1 && (
                    <hr className={styles.line} />
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        )}
        {footerButton && !logoutButton && (
          <Button
            variant='cta'
            className={styles['button-footer']}
            id={footerButton.id}
            onClick={() => handleButtonAction('/conta', footerButton.onClick)}
          >
            {footerButton.label}
          </Button>
        )}

        {logoutButton && !footerButton && (
          <button
            className={styles['button-logout']}
            id={logoutButton.id}
            onClick={() => handleButtonAction('/logout', logoutButton.onClick)}
            type='button'
          >
            <SignOutIcon size={20} /> {logoutButton.label}
          </button>
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className={styles.overlay}>
          <motion.aside
            className={styles.modal}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            exit={{ opacity: 0, x: '100%' }}
            role='dialog'
            aria-modal='true'
            aria-label={title}
          >
            {showHeader && (
              <header
                className={isGame ? styles['header-games'] : styles.header}
              >
                <div className={styles.texts}>
                  {isGame && (
                    <p className={styles['title-game']}>{gameTitle}</p>
                  )}
                  <h2 className={styles.title}>{title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className={styles['button-close']}
                  aria-label='Fechar menu'
                  type='button'
                >
                  <XIcon
                    size={24}
                    className={styles.close}
                  />
                </button>
              </header>
            )}

            <nav className={styles.nav}>
              <ul className={styles.list}>
                {items.map((item, index) => {
                  const isActive = isItemActive(item);

                  return (
                    <React.Fragment key={item.id}>
                      <li
                        className={[
                          styles.item,
                          isItemActive(item) ? styles.active : '',
                          item.hasSubMenu && openSubMenu === item.id
                            ? styles['submenu-open']
                            : '',
                        ].join(' ')}
                      >
                        <button
                          className={[
                            styles['button-item'],
                            isItemActive(item) ? styles.active : '',
                          ].join(' ')}
                          onClick={() => handleItemClick(item)}
                          aria-expanded={
                            !!item.hasSubMenu && openSubMenu === item.id
                          }
                          aria-controls={
                            item.hasSubMenu ? `submenu-${item.id}` : undefined
                          }
                        >
                          <span className={styles['icon-label']}>
                            {React.isValidElement(item.icon) ? (
                              React.cloneElement(
                                item.icon as ReactElement<any>,
                                {
                                  className: [
                                    styles.iconSvg,
                                    isActive ? styles['icon-active'] : '',
                                  ].join(' '),
                                }
                              )
                            ) : typeof item.icon === 'object' &&
                              'svgActive' in item.icon ? (
                              <Image
                                src={
                                  isActive
                                    ? item.icon.svgActive
                                    : item.icon.svgInactive
                                }
                                alt={item.label}
                                width={24}
                                height={24}
                                className={styles.icon}
                              />
                            ) : null}
                            <span className={styles.label}>{item.label}</span>
                          </span>
                          {item.hasSubMenu && (
                            <span className={styles.arrow}>
                              {openSubMenu === item.id ? (
                                <CaretUpIcon size={20} />
                              ) : (
                                <CaretDownIcon size={20} />
                              )}
                            </span>
                          )}
                        </button>
                        {item.hasSubMenu && renderSubMenu(item)}
                      </li>
                      {index < items.length - 1 && (
                        <hr className={styles.line} />
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </nav>
            <footer className={styles['modal-footer']}>{renderFooter()}</footer>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default ModalMenu;
