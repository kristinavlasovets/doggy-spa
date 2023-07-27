'use client';

import React, { FC } from 'react';

import { PageProps } from '@/types';

import { useMyTranslation } from '../i18n/client';

import { Title, Wrapper } from './styles';

const Home: FC<PageProps> = () => {
  const { t } = useMyTranslation();

  return (
    <Wrapper>
      <Title>{t('Home.title')}</Title>
    </Wrapper>
  );
};
export default Home;
