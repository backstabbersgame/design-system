import { Meta, StoryObj } from '@storybook/react';
import { games as gamesMock } from '../../constants';
import Carousel from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  argTypes: {
    games: {
      control: 'object',
      description: 'Array de games para exibir no carrossel',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Habilita autoplay do carrossel',
    },
    interval: {
      control: 'number',
      description: 'Intervalo entre slides em milissegundos',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
  args: {
    games: gamesMock,
    autoPlay: true,
    interval: 5000,
  },
};

export const AutoPlayDisabled: Story = {
  args: {
    games: gamesMock,
    autoPlay: false,
  },
  render: (args) => (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '88vw', display: 'flex' }}>
        <Carousel {...args} />
      </div>
    </div>
  ),
};

export const SingleItem: Story = {
  args: {
    games: [gamesMock[0]],
    autoPlay: false,
  },
};
