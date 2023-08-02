'use client';

import React, { FC } from 'react';

import HomeHeader from '@/components/HomeHeader';
import ShopGoods from '@/components/ShopGoods';
import SignUp from '@/components/SignUp';

import { Wrapper } from './styles';

const Home: FC = () => (
  <Wrapper>
    <HomeHeader />
    <SignUp />
    <ShopGoods variant="collars" />
    <ShopGoods variant="carryOns" />
  </Wrapper>
);
export default Home;
