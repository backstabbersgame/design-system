import React from 'react';
import styles from './index.module.scss';
import { BasicNavProps } from '../../types/nav';
import { HouseIcon } from '@phosphor-icons/react/dist/ssr';

export const BasicNav: React.FC<BasicNavProps> = ({
  variant = 'solara',
  links,
  mode = 'light',
  activeLink,
  onLinkClick,
  isSubpage,
  subpageLink,
  pageLink,
  className,
  ...props
}) => {
  return (
    <nav
      className={`${styles.nav} ${className || ''}`}
      {...props}
    >
     { isSubpage && <a
        key={pageLink}
        href={pageLink}
        className={`${styles.home}
          ${mode === 'light' ? styles.light : styles.dark}
          ${variant !== 'solara' ? styles.nonSolara : ''}`}
      >
        <HouseIcon size={24} />
      </a>}
      {links.map(({ name, href }) => (
        <a
          key={href}
          href={href}
          className={`${styles.link} ${
            activeLink === href ? styles.selected : ''
          } 
          ${mode === 'light' ? styles.light : styles.dark}
          ${variant !== 'solara' ? styles.nonSolara : ''}`}
          onClick={(e) => {
            if (href.startsWith('#')) {
              e.preventDefault();
            }
            onLinkClick?.(href);
          }}
          aria-current={activeLink === href ? 'page' : undefined}
        >
          {name}
        </a>
      ))}
    </nav>
  );
};

export default BasicNav;
