import React from 'react';
import Image from 'next/image';
import { Link } from '../types/link';
import { FooterItem, ModalItem } from '../types/modal';
import { GameData } from '../types/interfaces';
import {
  HouseIcon,
  RocketIcon,
  UsersThreeIcon,
  NewspaperIcon,
  ShoppingCartIcon,
  ChatsIcon,
  PlanetIcon,
} from '@phosphor-icons/react/dist/ssr';

const ActiveIcon = (
  <Image
    src='/images/planet-active.svg'
    alt={'item.label'}
    width={24}
    height={24}
  />
);
const InactiveIcon = (
  <Image
    src='/images/planet-inactive.svg'
    alt={'item.label'}
    width={24}
    height={24}
  />
);

export const links: Link[] = [
  { id: 'inicio', name: 'Início', href: '#inicio' },
  { id: 'jogos', name: 'Jogos', href: '#jogos' },
  { id: 'sobre', name: 'Sobre', href: '#sobre' },
  { id: 'newsletter', name: 'Newsletter', href: '#newsletter' },
];

export const defaultMenuItems: ModalItem[] = [
  {
    id: 'inicio',
    label: 'Início',
    icon: <HouseIcon size={24} />,
    href: '#inicio',
  },
  {
    id: 'jogos',
    label: 'Jogos',
    icon: <RocketIcon size={24} />,
    href: '#jogos',
  },
  {
    id: 'sobre',
    label: 'Sobre',
    icon: <UsersThreeIcon size={24} />,
    href: '#sobre',
  },
  {
    id: 'newsletter',
    label: 'Newsletter',
    icon: {
      svgActive: ActiveIcon,
      svgInactive: InactiveIcon,
    },
    href: '#newsletter',
  },
];

export const defaultFooterItems: FooterItem[] = [
  {
    id: '1',
    label: 'Voltar para a Solara',
    icon: <HouseIcon size={24} />,
    href: '#solara',
  },
  {
    id: '2',
    label: 'Lojinha',
    icon: <ShoppingCartIcon size={24} />,
    href: '#lojinha',
  },
  {
    id: '3',
    label: 'Contato',
    icon: <ChatsIcon size={24} />,
    href: '#contato',
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
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
  },
  {
    iconSrc: '/images/sketch-logo.svg',
    iconAlt: 'Ícone de gameplay',
    title: '4 modos de jogo',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
  },
  {
    iconSrc: '/images/heart.svg',
    iconAlt: 'Ícone de expansão',
    title: '3 expansões',
    description:
      'Lorem ipsum dolor sit amet consectetur. Sit aliquet\nelementum enim sed sed tristique fringilla.',
  },
];

export const details2 = [
  {
    iconSrc: '/images/sword.svg',
    iconAlt: 'Ícone de vendas',
    title: '300+ cópias vendidas',
    description: 'Lorem ipsum dolor sit amet consectetur. Sit aliquet',
  },
  {
    iconSrc: '/images/sketch-logo.svg',
    iconAlt: 'Ícone de gameplay',
    title: '4 modos de jogo',
    description: 'Lorem ipsum dolor sit amet consectetur. Sit aliquet',
  },
  {
    iconSrc: '/images/heart.svg',
    iconAlt: 'Ícone de expansão',
    title: '3 expansões',
    description: 'Lorem ipsum dolor sit amet consectetur. Sit aliquet',
  },
];

export const games: GameData[] = [
  {
    id: 1,
    name: 'Backstabbers Expansion',
    images: {
      ...images,
    },
    details: [...details],
    buttonText: 'Detalhes do jogo',
    link: '',
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
    details: [...details2],
    buttonText: 'Detalhes do jogo',
    link: '',
  },
];
