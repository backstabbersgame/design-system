import { Link } from './link';
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
    variant: 'solara' | 'backstabbers' | 'ordem' | 'rebeliao' | 'armada' | 'decodica';
    links: Link[];
    activeLink?: string;
    onLogoClick?: () => void;
    onMenuClick?: () => void;
    onLinkClick?: (href: string) => void;
    onAccountClick?: () => void;
    isSubpage?: boolean;
    subpageLink?: string;
    pageLink?: string;
    gameTitle?: string;
    pageTitle?: string;
    pathname?: string;
    onBack?: () => void;
}
//# sourceMappingURL=header.d.ts.map