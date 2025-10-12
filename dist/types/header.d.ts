import { Link } from './link';
type LocaleType = 'pt-BR' | 'en';
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
    currentLocale: LocaleType;
    onLocaleChange: (locale: LocaleType) => void;
    options: {
        value: LocaleType;
        label: string;
    }[];
    colorMode?: 'light' | 'dark';
}
export {};
//# sourceMappingURL=header.d.ts.map