'use client';

import React, { FC, useContext, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { useMyTranslation } from '@/app/i18n/client';
import { socials } from '@/constants/socials';
import { LanguageContext } from '@/context/LanguageContext';

import CopyrightMenu from '../CopyrightMenu';
import Newsletter from '../Newsletter';

import FooterMenu from './FooterMenu';
import LanguageSwitcher from './LanguageSwitcher';
import {
  Connection,
  Copyright,
  CopyrightMessage,
  Icons,
  Main,
  Pattern,
  Title,
  Wrapper,
} from './styles';

const Footer: FC = () => {
  const currentPath = usePathname();
  const { t } = useMyTranslation();

  const lng = useContext(LanguageContext);

  const translationPath = useMemo(() => currentPath.slice(4, currentPath.length), [currentPath]);

  return (
    <Wrapper>
      <Pattern />
      <Main>
        <FooterMenu variant="footerService" />
        <Connection>
          <Newsletter variant="footer" />
          <Title>{t('Socials.title')}</Title>
          <Icons>
            {socials.map(({ icon, href }) => (
              <a href={href} key={href}>
                {icon}
              </a>
            ))}
          </Icons>
        </Connection>
        <FooterMenu variant="footerNavigation" />
      </Main>
      <Copyright>
        <LanguageSwitcher lng={lng} translationPath={translationPath} />
        <CopyrightMenu variant="cookie" />
        <CopyrightMessage>{t('Copyright.text')}</CopyrightMessage>
        <CopyrightMenu variant="terms" />
      </Copyright>
    </Wrapper>
  );
};
export default Footer;
