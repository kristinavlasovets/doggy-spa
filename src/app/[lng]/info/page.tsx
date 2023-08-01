'use client';

import React, { FC, Fragment, useCallback, useState } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import SearchInput from '@/components/SearchInput';
import { GET_BY_BREED } from '@/graphql/queries';
import { DogInfo } from '@/types';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { initialBreed } from './config';
import {
  Breed,
  BreedInfo,
  Image,
  ImageFrame,
  MainStatistics,
  Statistics,
  Title,
  Wrapper,
} from './styles';

const Info: FC = () => {
  const [chosenBreed, setChosenBreed] = useState<string>(initialBreed);

  const { t } = useMyTranslation();

  const handleChooseBreed = useCallback(
    (breed: string) => () => {
      setChosenBreed(breed);
    },
    []
  );

  const { data }: DogInfo = useSuspenseQuery(GET_BY_BREED, {
    variables: { name: chosenBreed || initialBreed },
  });

  return (
    <Wrapper>
      <Title>{t('Info.header')}</Title>
      <SearchInput handleChooseBreed={handleChooseBreed} />
      {data.getByBreed &&
        data.getByBreed.map(
          ({
            image_link,
            name,
            energy,
            min_life_expectancy,
            good_with_strangers,
            good_with_other_dogs,
          }) => (
            <Fragment key={image_link}>
              <ImageFrame>
                <Image src={image_link} alt="dog" />
                <Breed>{name}</Breed>
              </ImageFrame>
              <BreedInfo>
                <MainStatistics>
                  {t('Info.energy')} {energy}
                </MainStatistics>
                <Statistics>
                  {t('Info.lifeExpectancy')} {min_life_expectancy}
                </Statistics>
                <Statistics>
                  {t('Info.withStrangers')} {good_with_strangers}
                </Statistics>
                <Statistics>
                  {t('Info.withDogs')} {good_with_other_dogs}
                </Statistics>
              </BreedInfo>
            </Fragment>
          )
        )}
    </Wrapper>
  );
};
export default Info;
