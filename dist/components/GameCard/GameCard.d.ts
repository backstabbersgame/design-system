import React from 'react';
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
}
declare const GameCard: ({ id, link, images, details, buttonText, name, onHeightChange, }: GameCardProps) => React.JSX.Element;
export default GameCard;
//# sourceMappingURL=GameCard.d.ts.map