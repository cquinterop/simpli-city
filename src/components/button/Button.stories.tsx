import type { Meta, StoryObj } from '@storybook/react';
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
    children: 'Submitting',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
  },
};

export const WithIconStart: Story = {
  args: {
    children: 'Download',
    startIcon: <Download />,
  },
};

export const WithIconEnd: Story = {
  args: {
    children: 'Download',
    endIcon: <Download />,
  },
};