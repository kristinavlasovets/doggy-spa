'use client';

import React, { FC, useState } from 'react';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { icons } from '@/constants';
import { headerNavMenu } from '@/constants/navMenu';
import { checkIsPathActive } from '@/utils/checkIsPathActive';

import Drawer from './Drawer';
import { Burger, LinkItem, Nav } from './styles';

const NavMenu: FC = () => {
  const { t, locale } = useMyTranslation();

  const pathName = usePathname();

  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);

  const handleToggleDrawer = () => {
    setIsOpenDrawer((prevState) => !prevState);
  };

  const handleCloseDrawer = () => {
    setIsOpenDrawer(false);
  };

  return (
    <>
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
      <Drawer onClose={handleCloseDrawer} isOpen={isOpenDrawer}>
        {headerNavMenu.map(({ name, path }) => {
          const isActive = checkIsPathActive(pathName, path);
          return (
            <LinkItem
              key={name}
              href={`/${locale}${path}`}
              isActive={isActive}
              onClick={handleToggleDrawer}
            >
              {t(name)}
            </LinkItem>
          );
        })}
      </Drawer>
      <Burger type="button" onClick={handleToggleDrawer}>
        {icons.burger}
      </Burger>
    </>
  );
};

export default NavMenu;
