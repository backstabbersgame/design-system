import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Carousel.module.scss';
import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import GameCard from '../GameCard/GameCard';
const Carousel = ({ games, autoPlay = true, interval = 5000, }) => {
    const { currentBreakpoint } = useBreakpoint();
    const isMobile = currentBreakpoint === 'mobile';
    const isTablet = currentBreakpoint === 'tablet';
    const isNotMobileAndisNotTablet = !isMobile && !isTablet;
    const [isPaused, setIsPaused] = useState(false);
    const [containerHeight, setContainerHeight] = useState(undefined);
    const [gameCardHeight, setGameCardHeight] = useState(undefined);
    const [activeIndex, setActiveIndex] = useState(0);
    const handleGameCardHeightChange = useCallback((height) => {
        setGameCardHeight(height);
    }, []);
    useEffect(() => {
        if (gameCardHeight !== undefined) {
            setContainerHeight(gameCardHeight);
        }
    }, [gameCardHeight]);
    useEffect(() => {
        if (!autoPlay || isPaused || activeIndex === undefined || !setActiveIndex)
            return;
        const timer = setInterval(() => {
            const nextIndex = (activeIndex + 1) % games.length;
            setActiveIndex(nextIndex);
        }, interval);
        return () => clearInterval(timer);
    }, [autoPlay, interval, isPaused, games.length, setActiveIndex, activeIndex]);
    const goToNext = () => {
        if (activeIndex !== undefined && setActiveIndex) {
            const nextIndex = (activeIndex + 1) % games.length;
            setActiveIndex(nextIndex);
        }
    };
    return (React.createElement("div", { className: styles.carouselWrapper, onMouseEnter: () => setIsPaused(true), onMouseLeave: () => setIsPaused(false), onTouchStart: () => setIsPaused(true), onTouchCancel: () => setIsPaused(false), onTouchEnd: () => setIsPaused(false) },
        React.createElement("div", { className: styles.carouselContainer, style: containerHeight ? { height: `${containerHeight}px` } : {} },
            React.createElement(AnimatePresence, { mode: 'popLayout' },
                React.createElement(motion.div, { key: games[activeIndex].id, initial: { opacity: 0, x: '50%' }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: '-50%' }, transition: { duration: 0.4 }, className: styles.carouselItem },
                    React.createElement(GameCard, { id: games[activeIndex].id, key: games[activeIndex].id, images: games[activeIndex].images, details: games[activeIndex].details, buttonText: games[activeIndex].buttonText, name: games[activeIndex].name, onHeightChange: handleGameCardHeightChange, link: games[activeIndex].link }),
                    isNotMobileAndisNotTablet && (React.createElement("button", { onClick: () => {
                            setIsPaused(true);
                            goToNext();
                        }, className: styles.carouselNext, style: containerHeight ? { height: `${containerHeight}px` } : {}, "aria-label": 'Pr\u00F3ximo item', onMouseEnter: () => setIsPaused(true) },
                        React.createElement(CaretRight, { size: 32 }))))))));
};
export default Carousel;
