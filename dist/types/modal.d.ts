export type FooterItem = {
    id: string;
    icon: React.ReactElement;
    label: string;
    href?: string;
};
export type SubItem = {
    id: string;
    label: string;
    href: string;
};
export type ModalItem = {
    id: string;
    icon: React.ReactElement | {
        svgActive: string;
        svgInactive: string;
    };
    label: string;
    href?: string;
    hasSubMenu?: boolean;
    subItems?: SubItem[];
};
export type ModalMenuProps = {
    showHeader?: boolean;
    isGame?: boolean;
    gameTitle?: string;
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    activeItem?: string;
    onItemSelect: (id: string) => void;
    customItems?: ModalItem[];
    openSubMenu?: string;
    onToggleSubMenu?: (id?: string) => void;
    onNavigate?: (href: string) => void;
    isSubpage?: boolean;
    customFooterItems?: FooterItem[];
    footerButton?: {
        id?: string;
        label: string;
        onClick: () => void;
    };
    logoutButton?: {
        id?: string;
        label: string;
        onClick: () => void;
    };
};
//# sourceMappingURL=modal.d.ts.map