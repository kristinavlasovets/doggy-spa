import React from 'react';
import { ThemeProvider } from 'styled-components';

import { LanguageContextProvider } from '@/context/LanguageContext';
import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import { ShopGoodsItemProps } from './types';
import ShopGoodsItem from '.';

const props: ShopGoodsItemProps = {
  name: 'Home.collarsOne',
  brand: 'Home.brand',
  image: '/assets/images/collar-one.png',
  price: 'CA $325.00',
};

describe('ShopGoodsItem', () => {
  it('renders a ShopGoodsItem in english', () => {
    render(
      <LanguageContextProvider lng="en">
        <ThemeProvider theme={commonTheme}>
          <ShopGoodsItem {...props} />
        </ThemeProvider>
      </LanguageContextProvider>
    );

    expect(
      screen.getByText(/Leather Dog Collars with Gold Name Tag*Luxe Animal Spa/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $325.00')).toBeInTheDocument();
  });

  it('renders a ShopGoodsItem in russian', () => {
    render(
      <LanguageContextProvider lng="ru">
        <ThemeProvider theme={commonTheme}>
          <ShopGoodsItem {...props} />
        </ThemeProvider>
      </LanguageContextProvider>
    );

    expect(
      screen.getByText(/Кожаные ошейники для собак с золотой именной биркой*Спа для Животных Luxe/)
    ).toBeInTheDocument();
    expect(screen.getByText('CA $325.00')).toBeInTheDocument();
  });
});
