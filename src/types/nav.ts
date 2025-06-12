export interface BasicNavProps extends React.HTMLAttributes<HTMLElement> {
  links: { name: string; href: string }[];
  activeLink?: string;
  onLinkClick?: (href: string) => void;
  mode: 'light' | 'dark';
}