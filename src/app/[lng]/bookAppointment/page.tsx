'use client';

import React, { FC } from 'react';
import dynamic from 'next/dynamic';

import { useMyTranslation } from '@/app/i18n/client';
import Form from '@/components/Form';
import { images } from '@/constants';

import {
  AddressInfo,
  Booking,
  Image,
  ImageFrame,
  InfoWrapper,
  Main,
  MapContainer,
  MapWrapper,
  OperationsInfo,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

const { bookHeaderImage } = images;

const BookAppointment: FC = () => {
  const { t } = useMyTranslation();

  return (
    <Wrapper>
      <ImageFrame>
        <Image src={bookHeaderImage} alt="dog" />
        <Title>{t('BookAppointment.subtitle')}</Title>
      </ImageFrame>
      <Main>
        <Booking>
          <Subtitle>{t('BookAppointment.informationSubtitle')}</Subtitle>
          <Form />
        </Booking>
        <MapContainer>
          <MapWrapper>
            <Map />
          </MapWrapper>
          <InfoWrapper>
            <AddressInfo>{t('BookAppointment.address')}</AddressInfo>
            <OperationsInfo>{t('BookAppointment.operations')}</OperationsInfo>
          </InfoWrapper>
        </MapContainer>
      </Main>
    </Wrapper>
  );
};
export default BookAppointment;
