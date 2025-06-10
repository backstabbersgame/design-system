import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './GameCard.module.scss';
import { Button } from '../Button/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { motion } from 'framer-motion';
const GameCard = ({ id, link = '', images, details, buttonText = 'Detalhes do jogo', name, onHeightChange, }) => {
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
        if (isNotMobileAndisNotTablet) {
            const updateHeight = () => {
                var _a;
                const detailsCurrentHeight = (_a = detailsRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;
                if (detailsCurrentHeight && imageRef.current) {
                    imageRef.current.style.height = `${detailsCurrentHeight}px`;
                }
                if (containerRef.current && onHeightChange) {
                    onHeightChange(containerRef.current.offsetHeight);
                }
            };
            updateHeight();
            window.addEventListener('resize', updateHeight);
            return () => {
                window.removeEventListener('resize', updateHeight);
            };
        }
        else {
            if (imageRef.current) {
                imageRef.current.style.height = '';
            }
            if (containerRef.current && onHeightChange) {
                onHeightChange(containerRef.current.offsetHeight);
            }
        }
        const timeoutId = setTimeout(() => {
            if (containerRef.current && onHeightChange) {
                onHeightChange(containerRef.current.offsetHeight);
            }
        }, 50);
        return () => clearTimeout(timeoutId);
    }, [isNotMobileAndisNotTablet, onHeightChange]);
    return (React.createElement("div", { className: styles['game-container'], ref: containerRef },
        React.createElement("div", { className: styles['game-content'] },
            React.createElement(motion.div, { className: styles['game-image'], ref: imageRef, initial: { opacity: 0, x: '50%' }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: '-50%' }, transition: { duration: 0.4, ease: 'easeInOut' } },
                React.createElement(Image, { width: currentImage.width, height: currentImage.height, src: `${basePath}${currentImage.src}`, alt: `Capa do jogo ${name}`, className: styles.image, priority: true, onLoad: () => {
                        if (containerRef.current && onHeightChange) {
                            onHeightChange(containerRef.current.offsetHeight);
                        }
                    } })),
            React.createElement(motion.div, { className: styles['details-container'], ref: detailsRef, initial: { opacity: 0, x: '50%' }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: '-50%' }, transition: { duration: 0.4, ease: 'easeInOut' } },
                details.map((detail, index) => (React.createElement(React.Fragment, null,
                    React.createElement("div", { key: `${name}-detail-${index}` },
                        React.createElement("div", { className: styles.detail },
                            React.createElement(Image, { width: 32, height: 32, src: `${basePath}${detail.iconSrc}`, alt: detail.iconAlt }),
                            React.createElement("div", { style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                } },
                                React.createElement("h4", { className: styles['detail-title'] }, detail.title),
                                React.createElement("p", { className: styles['detail-p'] }, detail.description)))),
                    index < details.length - 1 && React.createElement("hr", { className: styles.line })))),
                React.createElement(Button, { variant: 'tertiary', className: styles.btn, href: link }, buttonText)))));
};
export default GameCard;
