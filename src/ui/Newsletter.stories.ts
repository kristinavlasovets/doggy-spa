import Newsletter from '@/storybook-lib/Newsletter';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Newsletter> = {
  title: 'Newsletter Component',
  component: Newsletter,
};

export default meta;
type Story = StoryObj<typeof Newsletter>;

export const NewsletterDefault: Story = {
  name: 'Newsletter',
};
