'use client';

import React, { FC, useContext } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { icons } from '@/constants';
import { LanguageContext } from '@/context/LanguageContext';

import NavMenu from './NavMenu';
import { Banner, Icon, Message, NavBar, Wrapper } from './styles';

const { logo } = icons;

const Header: FC = () => {
  const lng = useContext(LanguageContext);
  const { t } = serverTranslation(lng);

  return (
    <Wrapper>
      <NavBar>
        <Icon>{logo}</Icon>
        <NavMenu />
      </NavBar>
      <Banner>
        <Message>{t('Home.banner')}</Message>
      </Banner>
    </Wrapper>
  );
};

export default Header;
