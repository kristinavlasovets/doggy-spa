import SignUp from '@/components/SignUp';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SignUp> = {
  title: 'SignUp Component',
  component: SignUp,
};

export default meta;
type Story = StoryObj<typeof SignUp>;

export const Default: Story = {
  name: 'SignUp',
};
