import React from 'react';
import { House, Rocket, UsersThree, Newspaper } from '@phosphor-icons/react';
export const links = [
    { name: 'Início', href: '#inicio' },
    { name: 'Jogos', href: '#jogos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Newsletter', href: '#newsletter' },
];
export const menuItems = [
    {
        id: 'inicio',
        label: 'Início',
        icon: React.createElement(House, { size: 24 }),
        href: '#inicio',
    },
    {
        id: 'jogos',
        label: 'Jogos',
        icon: React.createElement(Rocket, { size: 24 }),
        href: '#jogos',
    },
    {
        id: 'sobre',
        label: 'Sobre',
        icon: React.createElement(UsersThree, { size: 24 }),
        href: '#sobre',
    },
    {
        id: 'newsletter',
        label: 'Newsletter',
        icon: React.createElement(Newspaper, { size: 24 }),
        href: '#newsletter',
    },
];
export const images = {
    mobile: {
        src: '/images/backstabbers-expansion-mobile.png',
        width: 320,
        height: 285,
    },
    desktop: {
        src: '/images/backstabbers-expansion-desktop.png',
        width: 629,
        height: 394,
    },
};
export const details = [
    {
        iconSrc: '/images/sword.svg',
        iconAlt: 'Ícone de vendas',
        title: '300+ cópias vendidas',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
    },
    {
        iconSrc: '/images/sketch-logo.svg',
        iconAlt: 'Ícone de gameplay',
        title: '4 modos de jogo',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
    },
    {
        iconSrc: '/images/heart.svg',
        iconAlt: 'Ícone de expansão',
        title: '3 expansões',
        description: 'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
    },
];
export const games = [
    {
        id: 1,
        name: 'Backstabbers Expansion',
        images: Object.assign({}, images),
        details: [...details],
        buttonText: 'Detalhes do jogo',
        link: ''
    },
    {
        id: 2,
        name: 'Backstabbers Expansion',
        images: {
            mobile: {
                src: '/images/backstabbers-expansion-mobile copy.png',
                width: 320,
                height: 285,
            },
            desktop: {
                src: '/images/backstabbers-expansion-desktop copy.png',
                width: 629,
                height: 394,
            },
        },
        details: [...details],
        buttonText: 'Detalhes do jogo',
        link: ''
    },
];
