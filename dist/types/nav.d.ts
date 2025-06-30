export interface BasicNavProps extends React.HTMLAttributes<HTMLElement> {
    variant: 'solara' | 'backstabbers' | 'ordem' | 'rebeliao' | 'armada' | 'decodica';
    links: {
        name: string;
        href: string;
    }[];
    activeLink?: string;
    onLinkClick?: (href: string) => void;
    mode: 'light' | 'dark';
    isSubpage?: boolean;
    subpageLink?: string;
    pageLink?: string;
}
//# sourceMappingURL=nav.d.ts.map