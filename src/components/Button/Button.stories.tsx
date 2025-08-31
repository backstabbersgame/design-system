import type { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import React from 'react';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Label',
  arrowLeft: true,
  arrowRight: true,
  arrowUp: false,
  arrowDown: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Label',
  arrowLeft: true,
  arrowRight: false,
  arrowUp: true,
  arrowDown: false,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  children: 'Label',
  arrowLeft: true,
  arrowRight: true,
  arrowUp: false,
  arrowDown: false,
};

export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  children: 'Label',
  arrowLeft: true,
  arrowRight: true,
  arrowUp: false,
  arrowDown: false,
};

export const CTA = Template.bind({});
CTA.args = {
  variant: 'cta',
  children: 'Label',
};
