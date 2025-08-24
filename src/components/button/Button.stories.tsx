import type { Meta, StoryObj } from '@storybook/react-vite';
import { Download } from 'lucide-react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'radio',
      options: ['standard', 'outlined'],
    },
    sx: {
      control: 'object',
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'standard',
    "aria-label": "Click me"
  },
};

export const Outlined: Story = {
  args: {
    children: 'Click me',
    variant: 'outlined',
  },
};

export const Loading: Story = {
  args: {
    children: 'Click me',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Click me',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Click me',
    icon: <Download />,
  },
};

export const WithIconRight: Story = {
  args: {
    children: 'Click me',
    icon: <Download />,
    iconPosition: 'right',
  },
};

export const WithOnlyIcon: Story = {
  args: {
    icon: <Download />,
  },
};
