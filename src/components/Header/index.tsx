'use client';

import React, { FC } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import { icons } from '@/constants';

import NavMenu from '../NavMenu';

import { Banner, Icon, Message, NavBar, Wrapper } from './styles';

const { logo } = icons;

const Header: FC = () => {
  const { t } = useMyTranslation();

  return (
    <Wrapper>
      <NavBar>
        <Icon>{logo}</Icon>
        <NavMenu variant="header" />
      </NavBar>
      <Banner>
        <Message>{t('Home.banner')}</Message>
      </Banner>
    </Wrapper>
  );
};

export default Header;
