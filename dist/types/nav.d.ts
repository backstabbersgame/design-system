export interface BasicNavProps extends React.HTMLAttributes<HTMLElement> {
    variant: 'solara' | 'backstabbers' | 'ordem' | 'rebeliao' | 'armada';
    links: {
        name: string;
        href: string;
    }[];
    activeLink?: string;
    onLinkClick?: (href: string) => void;
    mode: 'light' | 'dark';
}
//# sourceMappingURL=nav.d.ts.map