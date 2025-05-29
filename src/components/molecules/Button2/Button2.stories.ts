import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button2 } from './Button2';

const meta = {
  title: 'Example/Button2',
  component: Button2,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary2: Story = {
  args: {
    label: 'Button 1',
    backgroundColor: "red",
  },
};

export const Secondary2: Story = {
  args: {
    label: 'Button 2',
    backgroundColor: "green",
  },
};
