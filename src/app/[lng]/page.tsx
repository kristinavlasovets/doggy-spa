'use client';

import React, { FC } from 'react';

import { PageProps } from '@/types';

import { useMyTranslation } from '../i18n/client';

import { Title } from './styles';

const Home: FC<PageProps> = () => {
  const { t } = useMyTranslation();

  return (
    <div>
      <Title>{t('Home.title')}</Title>
    </div>
  );
};
export default Home;
