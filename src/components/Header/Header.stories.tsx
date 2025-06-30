import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { Global, css } from '@storybook/theming';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <Global
          styles={css`
            #storybook-root {
              padding: 0 !important;
              margin: 0 !important;
            }
          `}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </>
    ),
  ],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

const basicLinks = [
  { name: 'Início', href: '/' },
  { name: 'Jogos', href: '/jogos' },
  { name: 'Lojinha', href: '/lojinha' },
  { name: 'Contato', href: '/contato' },
];

export const DesktopViewSolara: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
    variant: 'solara',
    activeLink: '/',
    pathname: '/',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const TabletViewSolara: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
    variant: 'solara',
    activeLink: '/',
    pathname: '/',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const MobileViewSolara: Story = {
  args: {
    links: basicLinks,
    onMenuClick: () => alert('Modal mobile'),
    variant: 'solara',
    activeLink: '/',
    pathname: '/',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const DesktopViewGames: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
    variant: 'backstabbers',
    activeLink: '/',
    pageLink: 'https://solarastudios.com.br/',
    isSubpage: true,
    pathname: '/jogos/backstabbers',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const TabletViewGames: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
    variant: 'ordem',
    activeLink: '/',
    pageLink: 'https://solarastudios.com.br/',
    isSubpage: true,
    pathname: '/jogos/ordem-ao-caos',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const MobileViewGames: Story = {
  args: {
    links: basicLinks,
    onMenuClick: () => alert('Modal mobile'),
    variant: 'rebeliao',
    activeLink: '/',
    pageLink: 'https://solarastudios.com.br/',
    isSubpage: true,
    pathname: '/jogos/rebeliao-dos-gatos',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};


export const DesktopViewGamesDetails: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
    variant: 'ordem',
    activeLink: '/',
    pageLink: 'https://solarastudios.com.br/',
    isSubpage: true,
    pathname: '/jogos/backstabbers/como-jogar',
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const TabletViewGamesDetails: Story = {
  args: {
    links: basicLinks,
    onAccountClick: () => alert('Minha conta clicado'),
    variant: 'armada',
    activeLink: '/',
    pageLink: 'https://solarastudios.com.br/',
    isSubpage: true,
    pathname: '/jogos/ordem-ao-caos/como-jogar',
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const MobileViewGamesDetails: Story = {
  args: {
    links: basicLinks,
    onMenuClick: () => alert('Modal mobile'),
    variant: 'backstabbers',
    activeLink: '/',
    pageLink: 'https://solarastudios.com.br/',
    isSubpage: true,
    pathname: '/jogos/rebeliao-dos-gatos/como-jogar',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};