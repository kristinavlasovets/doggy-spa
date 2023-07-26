'use client';

import React, { FC, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { LanguageContext } from '@/context/LanguageContext';

import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { Text } from './styles';

const Footer: FC = () => {
  const currentPath = usePathname();

  const lng = useContext(LanguageContext);

  const translationPath = useMemo(() => currentPath.slice(4, currentPath.length), [currentPath]);

  return (
    <footer id="footer">
      <Text>Footer</Text>
      <LanguageSwitcher lng={lng} translationPath={translationPath} />
      <Button />
    </footer>
  );
};
export default Footer;
