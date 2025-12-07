import { Link } from './link';

export interface BasicNavProps extends React.HTMLAttributes<HTMLElement> {
  variant:
    | 'solara'
    | 'backstabbers'
    | 'ordem'
    | 'rebeliao'
    | 'armada'
    | 'decodica'
    | 'drag'
    | 'galhos';
  links: Link[];
  activeLink?: string;
  onLinkClick?: (href: string) => void;
  mode: 'light' | 'dark';
  isSubpage?: boolean;
  subpageLink?: string;
  pageLink?: string;
}
