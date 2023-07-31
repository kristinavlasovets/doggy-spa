import HomeHeader from '@/components/HomeHeader';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeHeader> = {
  title: 'HomeHeader Component',
  component: HomeHeader,
};

export default meta;
type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  name: 'HomeHeader',
};
