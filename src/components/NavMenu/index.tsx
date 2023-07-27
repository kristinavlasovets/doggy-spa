'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { footerNavMenu, footerServiceMenu, headerNavMenu } from '@/constants/navMenu';
import { checkIsPathActive } from '@/utils/checkIsPathActive';

import { LinkItem, Nav } from './styles';
import { NavMenuProps } from './types';

const NavMenu: FC<NavMenuProps> = ({ variant }) => {
  const { t, locale } = useMyTranslation();

  const pathName = usePathname();

  const headerVariant = variant === 'header';
  const navigationMenu = headerVariant ? headerNavMenu : footerNavMenu || footerServiceMenu;

  return (
    <Nav>
      {navigationMenu.map(({ name, path }) => {
        const isActive = checkIsPathActive(pathName, path);
        return (
          <LinkItem key={name} href={`/${locale}${path}`} isActive={isActive}>
            {t(name)}
          </LinkItem>
        );
      })}
    </Nav>
  );
};

export default NavMenu;
