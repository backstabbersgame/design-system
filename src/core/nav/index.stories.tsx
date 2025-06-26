import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import BasicNav from './index';

export default {
  title: 'Core/BasicNav',
  components: BasicNav,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mode: {
      options: ['light', 'dark'],
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} as Meta<typeof BasicNav>;

const Template: StoryFn<typeof BasicNav> = (args) => {
  return <BasicNav {...args} />;
};

export const Light = Template.bind({});
Light.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
  mode: 'light',
  activeLink: '/',
  isSubpage: false,
};

export const Dark = Template.bind({});
Dark.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
  mode: 'dark',
  activeLink: '/',
  isSubpage: false,
};

export const SubpageLight = Template.bind({});
SubpageLight.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
  mode: 'light',
  activeLink: '/',
  pageLink: 'https://solarastudios.com.br/',
  isSubpage: true,
  subpageLink: '/',
};

export const SubpageDark = Template.bind({});
SubpageDark.args = {
  links: [
    { name: 'Início', href: '/' },
    { name: 'Jogos', href: '/about' },
    { name: 'Lojinha', href: '/services' },
    { name: 'Contato', href: '/contact' },
  ],
  mode: 'dark',
  activeLink: '/',
  pageLink: 'https://solarastudios.com.br/',
  isSubpage: true,
  subpageLink: '/',
};
