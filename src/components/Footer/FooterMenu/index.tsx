'use client';

import React, { FC } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import { footerNavMenu, footerServiceMenu } from '@/constants/navMenu';

import { LinkItem, Nav, Title } from './styles';
import { FooterMenuProps } from './types';

const FooterMenu: FC<FooterMenuProps> = ({ variant }) => {
  const { t, locale } = useMyTranslation();

  const footerServiceVariant = variant === 'footerService';
  const navigationMenu = footerServiceVariant ? footerServiceMenu : footerNavMenu;
  const navigationTitle = footerServiceVariant ? 'CustomerService.title' : 'Navigation.title';

  return (
    <Nav>
      <Title>{t(navigationTitle)}</Title>
      {navigationMenu.map(({ name, path }) => (
        <LinkItem key={name} href={`/${locale}${path}`}>
          {t(name)}
        </LinkItem>
      ))}
    </Nav>
  );
};

export default FooterMenu;
