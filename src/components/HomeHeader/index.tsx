'use client';

import React, { FC, useContext } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageContext } from '@/context/LanguageContext';

import { Button, Image, ImageFrame, Title } from './styles';

const HomeHeader: FC = () => {
  const lng = useContext(LanguageContext);
  const { t } = serverTranslation(lng);

  return (
    <ImageFrame>
      <Image src="../assets/images/home-header.png" alt="dog" />
      <Title>
        {t('Home.subtitleOne')}
        <br />
        <br />
        {t('Home.subtitleTwo')}
      </Title>
      <Button href="/bookAppointment">{t('BookAppointment.title')}</Button>
    </ImageFrame>
  );
};
export default HomeHeader;
