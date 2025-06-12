export type SubItem = {
    id: string;
    label: string;
    href: string;
};
export type ModalItem = {
    id: string;
    icon: React.ReactNode;
    label: string;
    href?: string;
    hasSubMenu?: boolean;
    subItems?: SubItem[];
};
export type ModalMenuProps = {
    showHeader?: boolean;
    title?: string;
    isOpen: boolean;
    onClose: () => void;
    activeItem?: string;
    onItemSelect: (id: string) => void;
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
    customItems?: ModalItem[];
    openSubMenu?: string;
    onToggleSubMenu?: (id?: string) => void;
    onNavigate?: (href: string) => void;
};
//# sourceMappingURL=modal.d.ts.map