import React from 'react';
import { Chats, House, Rocket, ShoppingCart, CaretDown, CaretUp, SignOut, X, } from '@phosphor-icons/react/dist/ssr';
import styles from './ModalMenu.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../Button/Button';
const ModalMenu = ({ showHeader = true, title = 'Menu', isOpen, onClose, activeItem, onItemSelect, footerButton, logoutButton, customItems, openSubMenu, onToggleSubMenu, onNavigate, }) => {
    const defaultItems = [
        {
            id: 'inicio',
            label: 'Início',
            icon: React.createElement(House, { size: 24 }),
            href: '/',
        },
        {
            id: 'jogos',
            label: 'Jogos',
            icon: React.createElement(Rocket, { size: 24 }),
            href: '/jogos',
            hasSubMenu: true,
            subItems: [
                { id: 'jogo1', label: 'Jogo 1', href: '/jogos/jogo-1' },
                { id: 'jogo2', label: 'Jogo 2', href: '/jogos/jogo-2' },
                { id: 'jogo3', label: 'Jogo 3', href: '/jogos/jogo-3' },
            ],
        },
        {
            id: 'lojinha',
            label: 'Lojinha',
            icon: React.createElement(ShoppingCart, { size: 24 }),
            href: '/lojinha',
        },
        {
            id: 'contato',
            label: 'Contato',
            icon: React.createElement(Chats, { size: 24 }),
            href: '/contato',
        },
    ];
    const items = customItems || defaultItems;
    const handleNavigation = (href) => {
        if (onNavigate) {
            onNavigate(href);
        }
        else {
            window.location.href = href;
        }
    };
    const isItemActive = (item) => {
        var _a;
        return (item.id === activeItem && openSubMenu !== item.id) ||
            ((_a = item.subItems) === null || _a === void 0 ? void 0 : _a.some((subItem) => subItem.id === activeItem));
    };
    const handleItemClick = (item) => {
        if (item.hasSubMenu) {
            onToggleSubMenu === null || onToggleSubMenu === void 0 ? void 0 : onToggleSubMenu(openSubMenu === item.id ? undefined : item.id);
            onItemSelect(item.id);
        }
        else if (item.href) {
            handleNavigation(item.href);
            onItemSelect(item.id);
            onToggleSubMenu === null || onToggleSubMenu === void 0 ? void 0 : onToggleSubMenu(undefined);
        }
    };
    const handleSubItemClick = (subItem) => {
        handleNavigation(subItem.href);
        onItemSelect(subItem.id);
        onToggleSubMenu === null || onToggleSubMenu === void 0 ? void 0 : onToggleSubMenu(undefined);
    };
    const handleButtonAction = (href, customAction) => {
        if (customAction) {
            customAction();
        }
        else {
            handleNavigation(href);
        }
        onClose();
    };
    return (React.createElement(AnimatePresence, null, isOpen ? (React.createElement("div", { className: styles.overlay },
        React.createElement(motion.div, { className: styles.modal, initial: { opacity: 0, x: '100%' }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.3, ease: 'easeInOut' }, exit: { opacity: 0, x: '100%' } },
            showHeader && (React.createElement("div", { className: styles.header },
                React.createElement("h2", { className: styles.title }, title),
                React.createElement("button", { onClick: onClose, className: styles['button-close'], "aria-label": 'Fechar menu' },
                    React.createElement(X, { size: 24, className: styles.close })))),
            React.createElement("nav", { className: styles.nav },
                React.createElement("ul", { className: styles.list }, items.map((item) => {
                    var _a;
                    return (React.createElement(React.Fragment, { key: item.id },
                        React.createElement("li", { className: `${styles.item} ${isItemActive(item) ? styles.active : ''} ${item.hasSubMenu && openSubMenu === item.id
                                ? styles['submenu-open']
                                : ''}` },
                            React.createElement("button", { className: `${styles['button-item']} ${isItemActive(item) ? styles.active : ''}`, onClick: () => handleItemClick(item) },
                                React.createElement("span", { className: styles['icon-label'] },
                                    item.icon,
                                    React.createElement("span", { className: styles.label }, item.label)),
                                item.hasSubMenu && (React.createElement("span", { className: styles.arrow }, openSubMenu === item.id ? (React.createElement(CaretUp, { size: 20 })) : (React.createElement(CaretDown, { size: 20 }))))),
                            item.hasSubMenu && openSubMenu === item.id && (React.createElement(AnimatePresence, null,
                                React.createElement(motion.ul, { className: styles.submenu, initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: 'auto' }, exit: { opacity: 0, height: 0 }, transition: { duration: 0.2 } }, (_a = item.subItems) === null || _a === void 0 ? void 0 : _a.map((subItem) => (React.createElement("li", { key: subItem.id, className: `${styles['submenu-item']} ${activeItem === subItem.id ? styles.active : ''}`, onClick: () => handleSubItemClick(subItem) }, subItem.label))))))),
                        React.createElement("hr", { className: styles.line })));
                }))),
            React.createElement("div", { className: styles['modal-footer'] },
                footerButton && !logoutButton && (React.createElement(Button, { variant: 'cta', className: styles['button-footer'], id: footerButton.id, onClick: () => handleButtonAction('/conta', footerButton.onClick) }, footerButton.label)),
                logoutButton && !footerButton && (React.createElement("button", { className: styles['button-logout'], id: logoutButton.id, onClick: () => handleButtonAction('/logout', logoutButton.onClick) },
                    React.createElement(SignOut, { size: 20 }),
                    " ",
                    logoutButton.label)))))) : null));
};
export default ModalMenu;
