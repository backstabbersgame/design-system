export interface ResponsiveImage {
    src: string;
    width: number;
    height: number;
}
export interface GameDetail {
    iconSrc: string;
    iconAlt: string;
    title: string;
    description: string;
}
export interface GameData {
    id: number;
    link: string;
    name: string;
    images: {
        mobile: ResponsiveImage;
        desktop: ResponsiveImage;
    };
    details: GameDetail[];
    buttonText?: string;
}
//# sourceMappingURL=interfaces.d.ts.map