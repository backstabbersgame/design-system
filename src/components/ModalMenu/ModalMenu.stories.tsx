import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import ModalMenu from './ModalMenu';
import Button from '../Button/Button';
import {
  HouseIcon,
  LightbulbFilamentIcon,
  PlanetIcon,
} from '@phosphor-icons/react/dist/ssr';

export default {
  title: 'Components/ModalMenu',
  component: ModalMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof ModalMenu>;

type Story = StoryObj<typeof ModalMenu>;

const Template: Story['render'] = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [activeItem, setActiveItem] = useState('inicio');
  const [openSubMenu, setOpenSubMenu] = useState(args.openSubMenu);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Abrir Menu</Button>

      <ModalMenu
        {...args}
        isOpen={isOpen}
        activeItem={activeItem}
        openSubMenu={openSubMenu}
        onClose={() => {
          setIsOpen(false);
          args.onClose?.();
        }}
        onItemSelect={(id) => {
          setActiveItem(id);
          args.onItemSelect?.(id);
        }}
        onToggleSubMenu={(id) => {
          setOpenSubMenu(id);
          args.onToggleSubMenu?.(id);
        }}
        onNavigate={(href) => {
          console.log(`Navegação simulada para: ${href}`);
          setIsOpen(false);
        }}
      />
    </>
  );
};

const footerItems = [
  {
    id: '1',
    icon: <HouseIcon size={24} />,
    label: 'Voltar para Solara',
    href: 'solarastudios.com.br',
  },
  {
    id: '2',
    icon: <PlanetIcon size={24} />,
    label: 'Lojinha',
    href: 'solarastudios.com.br',
  },
  {
    id: '3',
    icon: <LightbulbFilamentIcon size={24} />,
    label: 'Contato',
    href: 'solarastudios.com.br',
  },
];

export const Default = {
  render: Template,
  args: {
    isGame: false,
    isSubpage: false,
  },
};

export const DefaultGame = {
  render: Template,
  args: {
    isGame: true,
    gameTitle: 'BACKSTABBERS',
    isSubpage: true,
    customFooterItems: footerItems,
  },
};

export const WithFooterButtonAccount = {
  render: Template,
  args: {
    footerButton: {
      label: 'Minha conta',
      onClick: () => alert('Minha conta'),
    },
  },
};

export const WithFooterButtonLogout = {
  render: Template,
  args: {
    logoutButton: {
      label: 'Sair',
      onClick: () => alert('Logout clicado'),
    },
  },
};
