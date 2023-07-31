import Newsletter from '@/components/Newsletter';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Newsletter> = {
  title: 'Newsletter Component',
  component: Newsletter,
};

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const Default: Story = {
  name: 'Newsletter',
};
