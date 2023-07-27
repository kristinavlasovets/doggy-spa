import React, { FC } from 'react';
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';

import { useTranslation } from '@/app/i18n';
import { languages } from '@/app/i18n/settings';

import { Switcher } from './styles';
import { LanguageSwitcherProps } from './types';

const LanguageSwitcher: FC<LanguageSwitcherProps> = async ({ lng, translationPath }) => {
  const { t } = await useTranslation(lng);

  return (
    <Switcher>
      <Trans i18nKey="languageSwitcher" t={t}>
        <p>{lng}</p> |{' '}
      </Trans>
      {languages
        .filter((language) => lng !== language)
        .map((language, index) => (
          <p key={language}>
            {index > 0 && ' or '}
            <Link href={`/${language}/${translationPath}`} key={language}>
              {language}
            </Link>
          </p>
        ))}
    </Switcher>
  );
};

export default LanguageSwitcher;
