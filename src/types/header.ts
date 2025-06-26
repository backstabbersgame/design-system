import { Link } from "./link";

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  variant: 'solara' | 'backstabbers' | 'ordem' | 'rebeliao' | 'armada';
  links: Link[];
  activeLink?: string;
  onLogoClick?: () => void;
  onMenuClick?: () => void;
  onLinkClick?: (href: string) => void;
  onAccountClick?: () => void;
  isSubpage: boolean;
  subpageLink: string;
  pageLink: string;
}
