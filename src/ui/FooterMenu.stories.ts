import FooterMenu from '@/components/Footer/FooterMenu';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FooterMenu> = {
  title: 'FooterMenu Component',
  component: FooterMenu,
};

export default meta;
type Story = StoryObj<typeof FooterMenu>;

export const Default: Story = {
  name: 'FooterMenu',
};
