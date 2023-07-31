'use client';

import React, { FC } from 'react';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { headerNavMenu } from '@/constants/navMenu';
import { checkIsPathActive } from '@/utils/checkIsPathActive';

import { LinkItem, Nav } from './styles';

const NavMenu: FC = () => {
  const { t, locale } = useMyTranslation();

  const pathName = usePathname();

  return (
    <Nav>
      {headerNavMenu.map(({ name, path }) => {
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
