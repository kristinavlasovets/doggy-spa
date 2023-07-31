import CopyrightMenu from '@/components/Footer/CopyrightMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CopyrightMenu> = {
  title: 'CopyrightMenu Component',
  component: CopyrightMenu,
};

export default meta;
type Story = StoryObj<typeof CopyrightMenu>;

export const Default: Story = {
  name: 'CopyrightMenu',
};
