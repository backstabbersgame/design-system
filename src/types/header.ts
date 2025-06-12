export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
  activeLink?: string;
  onLogoClick?: () => void;
  onMenuClick?: () => void;
  onLinkClick?: (href: string) => void;
  onAccountClick?: () => void;
}
