import React from 'react';
import { GameData } from '../../types/interfaces';
interface CarouselProps {
    games: GameData[];
    autoPlay?: boolean;
    interval?: number;
}
declare const Carousel: ({ games, autoPlay, interval, }: CarouselProps) => React.JSX.Element;
export default Carousel;
//# sourceMappingURL=Carousel.d.ts.map