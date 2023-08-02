'use client';

import React, { FC, useContext } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { images, pathes } from '@/constants';
import { LanguageContext } from '@/context/LanguageContext';

import { Button, Image, ImageFrame, Title } from './styles';

const { bookAppointment } = pathes;
const { homeHeaderImage } = images;

const HomeHeader: FC = () => {
  const lng = useContext(LanguageContext);
  const { t } = serverTranslation(lng);

  return (
    <ImageFrame>
      <Image src={homeHeaderImage} alt="dog" />
      <Title>
        {t('Home.subtitleOne')}
        <br />
        <br />
        {t('Home.subtitleTwo')}
      </Title>
      <Button href={bookAppointment}>{t('BookAppointment.title')}</Button>
    </ImageFrame>
  );
};
export default HomeHeader;
