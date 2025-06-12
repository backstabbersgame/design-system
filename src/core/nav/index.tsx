import React from 'react';
import styles from './index.module.scss';
import { BasicNavProps } from '../../types/nav';

export const BasicNav: React.FC<BasicNavProps> = ({
  links,
  mode = 'light',
  activeLink,
  onLinkClick,
  className,
  ...props
}) => {
  return (
    <nav
      className={`${styles.nav} ${className || ''}`}
      {...props}
    >
      {links.map(({ name, href }) => (
        <a
          key={href}
          href={href}
          className={`${styles.link} ${
            activeLink === href ? styles.selected : ''
          } 
          ${mode === 'light' ? styles.light : styles.dark}`}
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
