'use client';

import React, { ChangeEvent, FC, memo, useState } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import { nameRegExp } from '@/constants';
import { GET_BY_SEARCH } from '@/graphql/queries';
import { usePopUp } from '@/hooks';
import { DogInfo } from '@/types';
import { setItemToLocalStorage } from '@/utils';
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';

import { Form, ImageWrapper, Input, Item, List, Wrapper } from './styles';
import { SearchInputProps } from './types';

const SearchInput: FC<SearchInputProps> = ({ handleChooseBreed }) => {
  const [popUpRef, isVisible, setIsVisible] = usePopUp();
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { t } = useMyTranslation();

  const { data }: DogInfo = useSuspenseQuery(GET_BY_SEARCH, {
    variables: { name: inputValue || 'poodle' },
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    const isCurrentValueValid = nameRegExp.test(currentValue);

    if (!isCurrentValueValid) {
      setInputValue(currentValue);
      setErrorMessage('Info.notValidInput');
    } else {
      setInputValue(currentValue);
      setErrorMessage('');
    }

    setIsVisible(true);
  };

  const handleClickBreed = (breed: string) => () => {
    setIsVisible((prevState) => !prevState);
    setInputValue(breed);
  };

  const handleSearchBreed = (breed: string) => () => {
    handleChooseBreed(breed)();
    setItemToLocalStorage('chosenBreed', breed);
    setInputValue('');
  };

  return (
    <Wrapper>
      <Form ref={popUpRef}>
        <Input
          placeholder={t('Info.searchPlaceholder')}
          value={inputValue}
          onChange={handleChange}
        />
        <ImageWrapper
          src="/assets/icons/search.svg"
          alt="search"
          width={30}
          height={30}
          onClick={handleSearchBreed(inputValue)}
        />
        {isVisible && (
          <List>
            {data.getByBreed.length ? (
              data.getByBreed
                .filter(({ name }) => name.charAt(0) === inputValue.toUpperCase())
                .map(({ name }) => (
                  <Item onClick={handleClickBreed(name)} key={name}>
                    {name}
                  </Item>
                ))
            ) : (
              <Item>{(errorMessage && t(errorMessage)) || t('Info.noResults')}</Item>
            )}
          </List>
        )}
      </Form>
    </Wrapper>
  );
};

export default memo(SearchInput);
