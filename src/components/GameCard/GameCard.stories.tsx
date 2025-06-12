import { Meta, StoryObj } from '@storybook/react';
import { images, details } from '../../constants';
import GameCard from './GameCard';

const meta: Meta<typeof GameCard> = {
  title: 'Components/GameCard',
  component: GameCard,
  tags: ['autodocs'],
  argTypes: {
    images: {
      control: 'object',
      description: 'Imagens responsivas para mobile e desktop',
    },
    details: {
      control: 'object',
      description: 'Lista de detalhes do jogo',
    },
    buttonText: {
      control: 'text',
      description: 'Texto do botão (opcional)',
    },
    name: {
      control: 'text',
      description: 'Nome do jogo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GameCard>;

export const Default: Story = {
  args: {
    images: images,
    details: details,
    name: 'Backstabbers Expansion',
    buttonText: 'Detalhes do jogo',
  },
};
