---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react-vite';
import <%= name %> from "./<%= name %>";

const meta: Meta<typeof <%= name %>> = {
  title: "Components/<%= name %>",
  component: <%= name %>,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
