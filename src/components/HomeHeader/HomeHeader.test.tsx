import React from 'react';
import { ThemeProvider } from 'styled-components';

import { LanguageContextProvider } from '@/context/LanguageContext';
import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import HomeHeader from '.';

describe('HomeHeader', () => {
  it('renders a HomeHeader in english', () => {
    render(
      <LanguageContextProvider lng="en">
        <ThemeProvider theme={commonTheme}>
          <HomeHeader />
        </ThemeProvider>
      </LanguageContextProvider>
    );

    expect(screen.getByText('Book Appointment')).toBeInTheDocument();
  });

  it('renders a HomeHeader in russian', () => {
    render(
      <LanguageContextProvider lng="ru">
        <ThemeProvider theme={commonTheme}>
          <HomeHeader />
        </ThemeProvider>
      </LanguageContextProvider>
    );

    expect(screen.getByText('Записаться на Прием')).toBeInTheDocument();
  });
});
