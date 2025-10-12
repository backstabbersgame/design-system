import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import SelectLanguage from './index';
import { render } from 'sass';

export default {
  title: 'Components/SelectLanguage',
  component: SelectLanguage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof SelectLanguage>;

type Story = StoryObj<typeof SelectLanguage>;

const Template: Story['render'] = (args) => {
  const [locale, setLocale] = useState<'pt-BR' | 'en'>('pt-BR');

  return (
    <SelectLanguage
      {...args}
      currentLocale={locale}
      onLocaleChange={setLocale}
    />
  );
};

export const Default = {
  render: Template,
  args: {
    options: [
      { value: 'pt-BR', label: '🇧🇷 Português' },
      { value: 'en', label: '🇺🇸 English' },
    ],
    colorMode: 'dark',
    currentLocale: 'pt-BR',
  },
};
