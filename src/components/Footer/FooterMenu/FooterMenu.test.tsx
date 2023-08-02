import React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import FooterMenu from '.';

jest.mock('next/navigation');

describe('Footer Menu', () => {
  it('renders a FooterMenu in english via footerService variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <FooterMenu variant="footerService" />
      </ThemeProvider>
    );

    expect(screen.getByText('Customer Service')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Cancellations')).toBeInTheDocument();
    expect(screen.getByText('Track Your Animal')).toBeInTheDocument();
    expect(screen.getByText('Luxe’s Annual Spa Day 2021')).toBeInTheDocument();
    expect(screen.getByText('Payment Options')).toBeInTheDocument();
  });

  it('renders a FooterMenu in english via alternate variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <FooterMenu variant="footerNavigation" />
      </ThemeProvider>
    );

    expect(screen.getByText('Navigation')).toBeInTheDocument();
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Help With Navigation')).toBeInTheDocument();
  });

  it('renders a FooterMenu in russian via footerService variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(
      <ThemeProvider theme={commonTheme}>
        <FooterMenu variant="footerService" />
      </ThemeProvider>
    );

    expect(screen.getByText('Служба поддержки')).toBeInTheDocument();
    expect(screen.getByText('Блог')).toBeInTheDocument();
    expect(screen.getByText('Аннулирования')).toBeInTheDocument();
    expect(screen.getByText('Отследить своего питомца')).toBeInTheDocument();
    expect(screen.getByText('Ежегодный Спа-день Luxe 2021')).toBeInTheDocument();
    expect(screen.getByText('Способ оплаты')).toBeInTheDocument();
  });

  it('renders a FooterMenu in russian via alternate variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(
      <ThemeProvider theme={commonTheme}>
        <FooterMenu variant="footerNavigation" />
      </ThemeProvider>
    );

    expect(screen.getByText('Навигация')).toBeInTheDocument();
    expect(screen.getByText('Главная')).toBeInTheDocument();
    expect(screen.getByText('О Нас')).toBeInTheDocument();
    expect(screen.getByText('Контакты')).toBeInTheDocument();
    expect(screen.getByText('FAQs')).toBeInTheDocument();
    expect(screen.getByText('Помощь с навигацией')).toBeInTheDocument();
  });
});
