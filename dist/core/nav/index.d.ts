import React from 'react';
interface BasicNavProps extends React.HTMLAttributes<HTMLElement> {
    links: {
        name: string;
        href: string;
    }[];
    activeLink?: string;
    onLinkClick?: (href: string) => void;
    mode: 'light' | 'dark';
}
export declare const BasicNav: React.FC<BasicNavProps>;
export default BasicNav;
//# sourceMappingURL=index.d.ts.map