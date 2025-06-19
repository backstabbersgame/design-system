import React from 'react';
import styles from './BreakpointTracker.module.scss';
import { useBreakpoint } from '../../hooks/useBreakpoint';
const breakpoint = {
    mobile: '767px',
    tablet: {
        min: '819px',
        max: '1032px',
    },
    laptop: {
        min: '1033px',
        max: '1280px',
    },
    desktop: {
        min: '1281px',
        max: '1440px',
    },
    wideScreen: '1441px',
    ultraWideScreen: '1513px',
};
const BreakpointTracker = () => {
    const { windowWidth, currentBreakpoint } = useBreakpoint();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: styles.breakpointTracker },
            React.createElement("h2", { className: styles.currentBreakpoint },
                "Current breakpoint: ",
                React.createElement("strong", null, currentBreakpoint),
                " (",
                windowWidth,
                "px)")),
        React.createElement("br", null),
        React.createElement("br", null),
        React.createElement("div", { className: styles.fixedBreakpoints },
            React.createElement("h4", null, "Breakpoints:"),
            React.createElement("ul", null, Object.entries(breakpoint).map(([name, value]) => {
                if (typeof value === 'string') {
                    return (React.createElement("li", { key: name },
                        name,
                        ": ",
                        value));
                }
                else {
                    return (React.createElement("li", { key: name },
                        name,
                        ": ",
                        value.min,
                        " - ",
                        value.max));
                }
            })))));
};
export default BreakpointTracker;
