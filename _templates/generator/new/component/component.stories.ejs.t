---
to: src/components/<%= name.toLowerCase() %>/<%= name %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react-vite';
import <%= name %> from "./<%= name %>";

const meta = {
  title: "Components/<%= name %>",
  component: <%= name %>,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof <%= name %>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
