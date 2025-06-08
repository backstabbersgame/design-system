import React, { HTMLAttributes } from 'react';
export interface GridProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    /** Layout */
    layout?: 12 | 8 | 6 | 4;
}
declare const Grid: ({ children, layout, className, ...props }: GridProps) => React.JSX.Element;
export default Grid;
//# sourceMappingURL=Grid.d.ts.map