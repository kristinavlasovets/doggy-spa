'use client';

import React, { FC, useEffect, useState } from 'react';

import { getItemFromLocalStorage } from '@/utils';

import { initialUserCredentials } from './config';
import PayPalProvider from './PayPalProvider';
import { Text, Wrapper } from './styles';

const Modal: FC = () => {
  const [userCredentialsValue, setUserCredentialsValue] = useState(initialUserCredentials);

  useEffect(() => {
    Object.keys(initialUserCredentials).forEach((item: string) => {
      setUserCredentialsValue((prevState) => ({
        ...prevState,
        [item]: getItemFromLocalStorage(item),
      }));
    });
  }, []);

  return (
    <Wrapper>
      {Object.entries(userCredentialsValue).map(([key, value]) => (
        <Text key={key}>
          {key}:<br /> {value}
        </Text>
      ))}
      <PayPalProvider />
    </Wrapper>
  );
};

export default Modal;
