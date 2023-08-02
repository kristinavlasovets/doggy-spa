'use client';

import React, { FC, useContext } from 'react';
import ShopGoodsItem from 'storybook-lib/ShopGoodsItem';

import { serverTranslation } from '@/app/i18n/client';
import { carryOnsAssortment, collarsAssortment, pathes } from '@/constants';
import { LanguageContext } from '@/context/LanguageContext';

import { Button, Main, Title, Wrapper } from './styles';
import { ShopGoodsProps } from './types';

const { info } = pathes;

const ShopGoods: FC<ShopGoodsProps> = ({ variant }) => {
  const lng = useContext(LanguageContext);
  const { t } = serverTranslation(lng);

  const collarsVariant = variant === 'collars';
  const goodsAssortment = collarsVariant ? collarsAssortment : carryOnsAssortment;

  return (
    <Wrapper>
      <Title>{collarsVariant ? t('Home.collarsTitle') : t('Home.carryOnsTitle')}</Title>
      <Main>
        {goodsAssortment.map(({ image, brand, name, price }) => (
          <ShopGoodsItem key={price} image={image} brand={brand} name={name} price={price} />
        ))}
      </Main>
      <Button href={info}>
        {collarsVariant ? t('Home.collarsButton') : t('Home.carryOnsButton')}
      </Button>
    </Wrapper>
  );
};
export default ShopGoods;
