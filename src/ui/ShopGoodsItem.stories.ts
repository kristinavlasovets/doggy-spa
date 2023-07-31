import ShopGoodsItem from '@/components/ShopGoods/ShopGoodsItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ShopGoodsItem> = {
  title: 'ShopGoodsItem Component',
  component: ShopGoodsItem,
};

export default meta;
type Story = StoryObj<typeof ShopGoodsItem>;

export const Default: Story = {
  name: 'ShopGoodsItem',
  args: {
    name: 'Home.collarsOne',
    brand: 'Home.brand',
    image: 'assets/images/collar-one.png',
    price: 'CA $325.00',
  },
};
