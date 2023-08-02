import ShopGoodsItem from '@/storybook-lib/ShopGoodsItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ShopGoodsItem> = {
  title: 'ShopGoodsItem Component',
  component: ShopGoodsItem,
};

export default meta;
type Story = StoryObj<typeof ShopGoodsItem>;

export const ShopGoodsItemDefault: Story = {
  name: 'ShopGoodsItem',
  args: {
    name: 'Home.collarsOne',
    brand: 'Home.brand',
    image: 'assets/images/collar-one.png',
    price: 'CA $325.00',
  },
};
