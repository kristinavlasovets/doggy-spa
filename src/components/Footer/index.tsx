'use client';

import React, { FC, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { LanguageContext } from '@/context/LanguageContext';

import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { Copyright, Main, Pattern, Text, Wrapper } from './styles';

const Footer: FC = () => {
  const currentPath = usePathname();

  const lng = useContext(LanguageContext);

  const translationPath = useMemo(() => currentPath.slice(4, currentPath.length), [currentPath]);

  return (
    <Wrapper>
      <Pattern />
      <Main>
        <Text>Footer</Text>

        <Button />
      </Main>
      <Copyright>
        <LanguageSwitcher lng={lng} translationPath={translationPath} />
      </Copyright>
    </Wrapper>
  );
};
export default Footer;
