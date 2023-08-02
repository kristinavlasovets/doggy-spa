'use client';

import React, { FC, useContext } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageContext } from '@/context/LanguageContext';

import { Image, Price, Title, Wrapper } from './styles';
import { ShopGoodsItemProps } from './types';

const ShopGoodsItem: FC<ShopGoodsItemProps> = (props) => {
  const lng = useContext(LanguageContext);
  const { t } = serverTranslation(lng);

  const { image, name, brand, price } = props;

  return (
    <Wrapper>
      <Image src={image} alt={t(name)} />
      <Title>
        {t(name)}
        <br />
        {t(brand)}
      </Title>
      <Price>{price}</Price>
    </Wrapper>
  );
};
export default ShopGoodsItem;
