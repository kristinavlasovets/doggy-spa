import React, { FC, useContext } from 'react';

import { serverTranslation } from '@/app/i18n/client';
import { LanguageContext } from '@/context/LanguageContext';

const Button: FC = () => {
  const lng = useContext(LanguageContext);
  const { t } = serverTranslation(lng);
  return <button type="button">{t('Footer.button')}</button>;
};
export default Button;
