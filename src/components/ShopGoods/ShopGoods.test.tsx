import React from 'react';
import { ThemeProvider } from 'styled-components';

import { LanguageContextProvider } from '@/context/LanguageContext';
import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import ShopGoods from '.';

describe('ShopGoods', () => {
  it('renders a ShopGoods in english via collars variant', () => {
    render(
      <LanguageContextProvider lng="en">
        <ThemeProvider theme={commonTheme}>
          <ShopGoods variant="collars" />
        </ThemeProvider>
      </LanguageContextProvider>
    );

    expect(screen.getByText('Dog Collars')).toBeInTheDocument();
    expect(
      screen.getByText(/Leather Dog Collars with Gold Name Tag*Luxe Animal Spa/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $325.00')).toBeInTheDocument();
    expect(
      screen.getByText(/Pink & White Diamond Encrusted Dog Collar*Luxe Animal Spa/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $1225.00')).toBeInTheDocument();
    expect(
      screen.getByText(/Large 3000kt Silver Diamond Collar*Luxe Animal Spa/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $1500.00')).toBeInTheDocument();
    expect(screen.getByText('See More Dog Collars')).toBeInTheDocument();
  });

  it('renders a ShopGoods in russian via collars variant', () => {
    render(
      <LanguageContextProvider lng="ru">
        <ThemeProvider theme={commonTheme}>
          <ShopGoods variant="collars" />
        </ThemeProvider>
      </LanguageContextProvider>
    );

    expect(screen.getByText('Ошейники для собак')).toBeInTheDocument();
    expect(
      screen.getByText(/Кожаные ошейники для собак с золотой именной биркой*Спа для Животных Luxe/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $325.00')).toBeInTheDocument();
    expect(
      screen.getByText(
        /Ошейник для собак с инкрустацией розовыми и белыми бриллиантами*Спа для Животных Luxe/
      )
    ).toBeInTheDocument();
    expect(screen.getByText('CA $1225.00')).toBeInTheDocument();
    expect(
      screen.getByText(/Ошейник с большим серебряным бриллиантом 3000 карат*Спа для Животных Luxe/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $1500.00')).toBeInTheDocument();
    expect(screen.getByText('Смотреть еще')).toBeInTheDocument();
  });
});
