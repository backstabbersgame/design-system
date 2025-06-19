import ButtonSpecial from './ButtonSpecial';
import type { Meta, StoryObj } from '@storybook/react';
import { PlanetIcon } from '@phosphor-icons/react';
// @ts-ignore
import gridStyles from './ButtonSpecialGrid.module.scss';

const meta: Meta<typeof ButtonSpecial> = {
  title: 'Components/ButtonSpecial',
  component: ButtonSpecial,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof ButtonSpecial>;

const items = [
  {
    icon: <PlanetIcon size={32} />,
    label: 'Favoritos',
    href: '#',
  },
  {
    icon: <PlanetIcon size={32} />,
    label: 'Aprender',
    href: '#',
  },
  {
    icon: <PlanetIcon size={32} />,
    label: 'Jogar',
    href: '#',
  },
  {
    icon: <PlanetIcon size={32} />,
    label: 'Enviar',
    href: '#',
  },
];

const itemsSmall = [
  {
    icon: <PlanetIcon size={24} />,
    label: 'Favoritos',
    href: '#',
  },
  {
    icon: <PlanetIcon size={24} />,
    label: 'Aprender',
    href: '#',
  },
  {
    icon: <PlanetIcon size={24} />,
    label: 'Jogar',
    href: '#',
  },
  {
    icon: <PlanetIcon size={24} />,
    label: 'Enviar',
    href: '#',
  },
];

export const BigWith4Buttons: Story = {
  render: () => (
    <div className={`${gridStyles.gridWrapper} ${gridStyles['has-4']}`}>
      {items.map((item, i) => (
        <ButtonSpecial
          key={i}
          icon={item.icon}
          label={item.label}
          href={item.href}
          size='big'
        />
      ))}
    </div>
  ),
};

export const BigWith3Buttons: Story = {
  render: () => (
    <div className={`${gridStyles.gridWrapper} ${gridStyles['has-3']}`}>
      {items.slice(1).map((item, i) => (
        <ButtonSpecial
          key={i}
          icon={item.icon}
          label={item.label}
          href={item.href}
          size='big'
        />
      ))}
    </div>
  ),
};

export const SmallWith4Buttons: Story = {
  render: () => (
    <div className={`${gridStyles.gridWrapper} ${gridStyles['has-4']}`}>
      {itemsSmall.map((item, i) => (
        <ButtonSpecial
          key={i}
          icon={item.icon}
          label={item.label}
          href={item.href}
          size='small'
        />
      ))}
    </div>
  ),
};

export const SmallWith3Buttons: Story = {
  render: () => (
    <div className={`${gridStyles.gridWrapper} ${gridStyles['has-3']}`}>
      {itemsSmall.slice(1).map((item, i) => (
        <ButtonSpecial
          key={i}
          icon={item.icon}
          label={item.label}
          href={item.href}
          size='small'
        />
      ))}
    </div>
  ),
};
