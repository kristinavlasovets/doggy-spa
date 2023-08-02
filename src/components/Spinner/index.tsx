'use client';

import React, { FC } from 'react';

import { Loader, Wrapper } from './styles';

const Spinner: FC = () => (
  <Wrapper>
    <Loader />
  </Wrapper>
);

export default Spinner;
