'use client';

import React, { createContext, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@/lib/registry';
import { GlobalStyles } from '@/styles/globalStyles';
import { commonTheme } from '@/styles/theme';

export const LanguageContext = createContext<'en' | 'ru'>('en');

export const LanguageContextProvider = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: 'en' | 'ru';
}) => (
  <LanguageContext.Provider value={lng}>
    <StyledComponentsRegistry>
      <ThemeProvider theme={commonTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  </LanguageContext.Provider>
);
