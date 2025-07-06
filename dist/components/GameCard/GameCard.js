import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './GameCard.module.scss';
import { Button } from '../Button/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { motion } from 'framer-motion';
const GameCard = ({ id, link = '', images, details, buttonText = 'Detalhes do jogo', name, onHeightChange, onDetailsContainerHeightChange, }) => {
    const { currentBreakpoint } = useBreakpoint();
    const isMobile = currentBreakpoint === 'mobile';
    const isTablet = currentBreakpoint === 'tablet';
    const isNotMobileAndisNotTablet = !isMobile && !isTablet;
    const currentImage = isMobile ? images.mobile : images.desktop;
    const detailsRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    useEffect(() => {
        if (!detailsRef.current || !onDetailsContainerHeightChange)
            return;
        const updateHeight = () => {
            const rect = detailsRef.current.getBoundingClientRect();
            onDetailsContainerHeightChange(rect.height);
        };
        updateHeight();
        const ro = new ResizeObserver(updateHeight);
        ro.observe(detailsRef.current);
        return () => ro.disconnect();
    }, [onDetailsContainerHeightChange]);
    return (React.createElement("div", { className: styles['game-container'], ref: containerRef },
        React.createElement("div", { className: styles['game-content'] },
            React.createElement(motion.div, { key: `${id}-image`, className: styles['game-image'], ref: imageRef, initial: { opacity: 0, x: '50%' }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: '-50%' }, transition: { duration: 0.4, ease: 'easeInOut' } },
                React.createElement(Image, { width: currentImage.width, height: currentImage.height, src: `${basePath}${currentImage.src}`, alt: `Capa do jogo ${name}`, className: styles.image, priority: true, onLoad: () => {
                        if (containerRef.current && onHeightChange) {
                            onHeightChange(containerRef.current.offsetHeight);
                        }
                    } })),
            React.createElement(motion.div, { key: `${id}-details`, className: styles['details-container'], ref: detailsRef, initial: { opacity: 0, x: '50%' }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: '-50%' }, transition: { duration: 0.4, ease: 'easeInOut' } },
                React.createElement("div", { className: styles.details }, details.map((detail, index) => (React.createElement(React.Fragment, null,
                    React.createElement("div", { key: `${name}-detail-${index}` },
                        React.createElement("div", { className: styles.detailItem },
                            React.createElement(Image, { key: `${name}-detail-${index}`, width: 32, height: 32, src: `${basePath}${detail.iconSrc}`, alt: detail.iconAlt }),
                            React.createElement("div", { style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                } },
                                React.createElement("h4", { className: styles['detail-title'] }, detail.title),
                                React.createElement("p", { className: styles['detail-p'] }, detail.description)))),
                    index < details.length - 1 && React.createElement("hr", { className: styles.line }))))),
                React.createElement(Button, { variant: 'tertiary', className: styles.btn, href: link }, buttonText)))));
};
export default GameCard;
