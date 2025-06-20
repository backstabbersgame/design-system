import { useEffect, useState } from 'react';
const breakpoints = {
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
export const useBreakpoint = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [currentBreakpoint, setCurrentBreakpoint] = useState('unknown');
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const updateWindowWidth = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
            setCurrentBreakpoint(getCurrentBreakpoint(newWidth));
        };
        const getCurrentBreakpoint = (width) => {
            if (width >= parseInt(breakpoints.ultraWideScreen)) {
                return 'ultra wide screen';
            }
            if (width >= parseInt(breakpoints.wideScreen)) {
                return 'wide screen';
            }
            if (width >= parseInt(breakpoints.desktop.min) &&
                width <= parseInt(breakpoints.desktop.max)) {
                return 'desktop';
            }
            if (width >= parseInt(breakpoints.laptop.min) &&
                width <= parseInt(breakpoints.laptop.max)) {
                return 'laptop';
            }
            if (width >= parseInt(breakpoints.tablet.min) &&
                width <= parseInt(breakpoints.tablet.max)) {
                return 'tablet';
            }
            if (width <= parseInt(breakpoints.mobile) ||
                width < parseInt(breakpoints.tablet.min)) {
                return 'mobile';
            }
            return 'unknown';
        };
        updateWindowWidth();
        window.addEventListener('resize', updateWindowWidth);
        return () => window.removeEventListener('resize', updateWindowWidth);
    }, []);
    return {
        windowWidth,
        currentBreakpoint,
    };
};
