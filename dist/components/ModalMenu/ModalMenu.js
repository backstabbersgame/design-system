import React from 'react';
import { CaretDownIcon, CaretUpIcon, SignOutIcon, XIcon, } from '@phosphor-icons/react/dist/ssr';
import styles from './ModalMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button/Button';
import { defaultMenuItems, defaultFooterItems } from '../../constants';
const ModalMenu = ({ showHeader = true, isGame, gameTitle, title = 'Menu', isOpen, onClose, activeItem, onItemSelect, isSubpage, footerButton, logoutButton, customItems, customFooterItems, openSubMenu, onToggleSubMenu, onNavigate, }) => {
    const items = customItems || defaultMenuItems;
    const footerItems = customFooterItems || defaultFooterItems;
    const isItemActive = (item) => {
        var _a;
        return (item.id === activeItem && openSubMenu !== item.id) ||
            ((_a = item.subItems) === null || _a === void 0 ? void 0 : _a.some((sub) => sub.id === activeItem));
    };
    const scrollOrNavigate = (href) => {
        if (!href)
            return;
        if (href.startsWith('#')) {
            const target = document.getElementById(href.slice(1));
            if (target)
                target.scrollIntoView({ behavior: 'smooth' });
            onNavigate === null || onNavigate === void 0 ? void 0 : onNavigate(href);
            onClose();
        }
        else {
            onNavigate ? onNavigate(href) : (window.location.href = href);
            onClose();
        }
    };
    const handleItemClick = (item) => {
        if (item.hasSubMenu) {
            onToggleSubMenu === null || onToggleSubMenu === void 0 ? void 0 : onToggleSubMenu(openSubMenu === item.id ? undefined : item.id);
            onItemSelect(item.id);
        }
        else if (item.href) {
            scrollOrNavigate(item.href);
            onItemSelect(item.id);
            onToggleSubMenu === null || onToggleSubMenu === void 0 ? void 0 : onToggleSubMenu(undefined);
        }
    };
    const handleSubItemClick = (subItem) => {
        scrollOrNavigate(subItem.href);
        onItemSelect(subItem.id);
        onToggleSubMenu === null || onToggleSubMenu === void 0 ? void 0 : onToggleSubMenu(undefined);
    };
    const handleButtonAction = (href, customAction) => {
        if (customAction) {
            customAction();
        }
        else {
            scrollOrNavigate(href);
        }
        onClose();
    };
    const renderSubMenu = (item) => {
        var _a;
        return (React.createElement(AnimatePresence, null, openSubMenu === item.id && (React.createElement(motion.ul, { id: `submenu-${item.id}`, className: styles.submenu, initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.2 } }, (_a = item.subItems) === null || _a === void 0 ? void 0 : _a.map((subItem) => (React.createElement("li", { key: subItem.id, className: `${styles['submenu-item']} ${activeItem === subItem.id ? styles.active : ''}` },
            React.createElement("button", { type: 'button', onClick: () => handleSubItemClick(subItem), className: styles['submenu-button'] }, subItem.label))))))));
    };
    const renderFooter = () => {
        return (React.createElement("div", { className: styles['container-footer'] },
            isSubpage && (React.createElement("ul", { className: styles['list-footer'] }, footerItems.map((footerItem, index) => (React.createElement(React.Fragment, { key: footerItem.id },
                React.createElement("li", { className: styles.item, role: 'link' },
                    React.createElement("a", { className: styles['link-footer'], href: footerItem.href, rel: 'noopener noreferrer' },
                        React.createElement("span", { className: styles['icon-label'] },
                            footerItem.icon,
                            React.createElement("span", { className: styles.label }, footerItem.label)))),
                index < footerItems.length - 1 && (React.createElement("hr", { className: styles.line }))))))),
            footerButton && !logoutButton && (React.createElement(Button, { variant: 'cta', className: styles['button-footer'], id: footerButton.id, onClick: () => handleButtonAction('/conta', footerButton.onClick) }, footerButton.label)),
            logoutButton && !footerButton && (React.createElement("button", { className: styles['button-logout'], id: logoutButton.id, onClick: () => handleButtonAction('/logout', logoutButton.onClick), type: 'button' },
                React.createElement(SignOutIcon, { size: 20 }),
                " ",
                logoutButton.label))));
    };
    return (React.createElement(AnimatePresence, null, isOpen ? (React.createElement("div", { className: styles.overlay },
        React.createElement(motion.aside, { className: styles.modal, initial: { opacity: 0, x: '100%' }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3, ease: 'easeInOut' }, exit: { opacity: 0, x: '100%' }, role: 'dialog', "aria-modal": 'true', "aria-label": title },
            showHeader && (React.createElement("header", { className: isGame ? styles['header-games'] : styles.header },
                React.createElement("div", { className: styles.texts },
                    isGame && (React.createElement("p", { className: styles['title-game'] }, gameTitle)),
                    React.createElement("h2", { className: styles.title }, title)),
                React.createElement("button", { onClick: onClose, className: styles['button-close'], "aria-label": 'Fechar menu', type: 'button' },
                    React.createElement(XIcon, { size: 24, className: styles.close })))),
            React.createElement("nav", { className: styles.nav },
                React.createElement("ul", { className: styles.list }, items.map((item, index) => (React.createElement(React.Fragment, { key: item.id },
                    React.createElement("li", { className: [
                            styles.item,
                            isItemActive(item) ? styles.active : '',
                            item.hasSubMenu && openSubMenu === item.id
                                ? styles['submenu-open']
                                : '',
                        ].join(' ') },
                        React.createElement("button", { className: [
                                styles['button-item'],
                                isItemActive(item) ? styles.active : '',
                            ].join(' '), onClick: () => handleItemClick(item), "aria-expanded": !!item.hasSubMenu && openSubMenu === item.id, "aria-controls": item.hasSubMenu ? `submenu-${item.id}` : undefined },
                            React.createElement("span", { className: styles['icon-label'] },
                                item.icon,
                                React.createElement("span", { className: styles.label }, item.label)),
                            item.hasSubMenu && (React.createElement("span", { className: styles.arrow }, openSubMenu === item.id ? (React.createElement(CaretUpIcon, { size: 20 })) : (React.createElement(CaretDownIcon, { size: 20 }))))),
                        item.hasSubMenu && renderSubMenu(item)),
                    index < items.length - 1 && React.createElement("hr", { className: styles.line })))))),
            React.createElement("footer", { className: styles['modal-footer'] }, renderFooter())))) : null));
};
export default ModalMenu;
