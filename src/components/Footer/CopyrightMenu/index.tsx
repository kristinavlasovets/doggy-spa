'use client';

import React, { FC } from 'react';

import { useMyTranslation } from '@/app/i18n/client';
import { footerCopyrightCookieMenu, footerCopyrightTermsMenu } from '@/constants/navMenu';

import { LinkItem, Nav } from './styles';
import { CopyrightMenuProps } from './types';

const CopyrightMenu: FC<CopyrightMenuProps> = ({ variant }) => {
  const { t, locale } = useMyTranslation();

  const cookieVariant = variant === 'cookie';
  const navigationMenu = cookieVariant ? footerCopyrightCookieMenu : footerCopyrightTermsMenu;

  return (
    <Nav>
      {navigationMenu.map(({ name, path }) => (
        <LinkItem key={name} href={`/${locale}${path}`}>
          {t(name)}
        </LinkItem>
      ))}
    </Nav>
  );
};

export default CopyrightMenu;
