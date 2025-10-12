import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './GameCard.module.scss';
import { Button } from '../Button/Button';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { motion } from 'framer-motion';

interface ResponsiveImage {
  src: string;
  width: number;
  height: number;
}

interface GameDetail {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
}
interface GameCardProps {
  id: number;
  link: string;
  images: {
    mobile: ResponsiveImage;
    desktop: ResponsiveImage;
  };
  details: GameDetail[];
  buttonText?: string;
  name: string;
  onHeightChange?: (height: number) => void;
  onDetailsContainerHeightChange?: (height: number) => void;
}

const GameCard = ({
  id,
  link = '',
  images,
  details,
  buttonText = 'Detalhes do jogo',
  name,
  onHeightChange,
  onDetailsContainerHeightChange,
}: GameCardProps) => {
  const { currentBreakpoint } = useBreakpoint();
  const isMobile = currentBreakpoint === 'mobile';
  const isTablet = currentBreakpoint === 'tablet';
  const isNotMobileAndisNotTablet = !isMobile && !isTablet;
  const currentImage = isMobile ? images.mobile : images.desktop;
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  useEffect(() => {
    if (!detailsRef.current || !onDetailsContainerHeightChange) return;

    const updateHeight = () => {
      if (!detailsRef.current) return;

      try {
        const rect = detailsRef.current.getBoundingClientRect();
        onDetailsContainerHeightChange(rect.height);
      } catch (error) {
        console.warn('Erro ao obter dimensões do elemento:', error);
      }
    };

    updateHeight();

    const ro = new ResizeObserver(updateHeight);
    
    if (detailsRef.current) {
      ro.observe(detailsRef.current);
    }

    return () => {
      try {
        ro.disconnect();
      } catch (error) {
        console.warn('Erro ao desconectar ResizeObserver:', error);
      }
    };
  }, [onDetailsContainerHeightChange]);

  const handleImageLoad = () => {
    if (containerRef.current && onHeightChange) {
      try {
        onHeightChange(containerRef.current.offsetHeight);
      } catch (error) {
        console.warn('Erro ao obter altura do container:', error);
      }
    }
  };

  return (
    <div
      className={styles['game-container']}
      ref={containerRef}
      key={id}
    >
      <div className={styles['game-content']}>
        <motion.div
          key={`${id}-image`}
          className={styles['game-image']}
          ref={imageRef}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            width={currentImage.width}
            height={currentImage.height}
            src={`${basePath}${currentImage.src}`}
            alt={`Capa do jogo ${name}`}
            className={styles.image}
            priority={true}
            onLoad={handleImageLoad}
          />
        </motion.div>
        <motion.div
          key={`${id}-details`}
          className={styles['details-container']}
          ref={detailsRef}
          initial={{ opacity: 0, x: '50%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-50%' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className={styles.details}>
            {details.map((detail, index) => (
              <React.Fragment key={`${name}-detail-${index}`}>
                <div key={`${name}-detail-${index}`}>
                  <div className={styles.detailItem}>
                    <Image
                      key={`${name}-detail-${index}`}
                      width={32}
                      height={32}
                      src={`${basePath}${detail.iconSrc}`}
                      alt={detail.iconAlt}
                    />
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                      }}
                    >
                      <h4 className={styles['detail-title']}>{detail.title}</h4>
                      <p className={styles['detail-p']}>{detail.description}</p>
                    </div>
                  </div>
                </div>
                {index < details.length - 1 && <hr className={styles.line} />}
              </React.Fragment>
            ))}
          </div>
          <Button
            variant='tertiary'
            className={styles.btn}
            href={link}
          >
            {buttonText}
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default GameCard;
