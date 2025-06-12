import React from 'react';
import {
  Chats,
  House,
  Rocket,
  ShoppingCart,
  CaretDown,
  CaretUp,
  SignOut,
  X,
} from '@phosphor-icons/react/dist/ssr';
import styles from './ModalMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button/Button';
import { ModalItem, ModalMenuProps, SubItem } from '../../types/modal';
import { menuItems } from '../../constants';

const ModalMenu: React.FC<ModalMenuProps> = ({
  showHeader = true,
  title = 'Menu',
  isOpen,
  onClose,
  activeItem,
  onItemSelect,
  footerButton,
  logoutButton,
  customItems,
  openSubMenu,
  onToggleSubMenu,
  onNavigate,
}) => {
  const defaultItems = menuItems;
  const items = customItems || defaultItems;

  const isItemActive = (item: ModalItem) =>
    (item.id === activeItem && openSubMenu !== item.id) ||
    item.subItems?.some((sub) => sub.id === activeItem);

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
    if (footerButton && !logoutButton) {
      return (
        <Button
          variant='cta'
          className={styles['button-footer']}
          id={footerButton.id}
          onClick={() => handleButtonAction('/conta', footerButton.onClick)}
        >
          {footerButton.label}
        </Button>
      );
    }
    if (logoutButton && !footerButton) {
      return (
        <button
          className={styles['button-logout']}
          id={logoutButton.id}
          onClick={() => handleButtonAction('/logout', logoutButton.onClick)}
          type='button'
        >
          <SignOut size={20} /> {logoutButton.label}
        </button>
      );
    }
    return null;
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
              <header className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <button
                  onClick={onClose}
                  className={styles['button-close']}
                  aria-label='Fechar menu'
                  type='button'
                >
                  <X
                    size={24}
                    className={styles.close}
                  />
                </button>
              </header>
            )}

            <nav className={styles.nav}>
              <ul className={styles.list}>
                {items.map((item) => (
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
                        type='button'
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
                          {item.icon}
                          <span className={styles.label}>{item.label}</span>
                        </span>
                        {item.hasSubMenu && (
                          <span className={styles.arrow}>
                            {openSubMenu === item.id ? (
                              <CaretUp size={20} />
                            ) : (
                              <CaretDown size={20} />
                            )}
                          </span>
                        )}
                      </button>
                      {item.hasSubMenu && renderSubMenu(item)}
                    </li>
                    <hr className={styles.line} />
                  </React.Fragment>
                ))}
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
