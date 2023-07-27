'use client';

import React, { FC } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import { Dog, PageProps } from '@/types';
import { gql } from '@apollo/client';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { Title } from './styles';

const query = gql`
  query {
    breed(type: "poodle") {
      message
      status
    }
  }
`;

const Info: FC<PageProps> = () => {
  const { t } = useMyTranslation();

  const { data }: Dog = useSuspenseQuery(query);

  return (
    <div>
      <Title>{t('Info.title')}</Title>
      <img src={data.breed.message} alt="dog" />
      <p>{data.breed.status}</p>
    </div>
  );
};
export default Info;
