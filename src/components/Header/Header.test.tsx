import React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import Header from '.';

jest.mock('next/navigation');

describe('Header', () => {
  it('renders a Header in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getAllByText('Home')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Info')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Spa Services')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Book Appointment')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Blog')[0]).toBeInTheDocument();
    expect(screen.getAllByText('About Us')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Contact Us')[0]).toBeInTheDocument();
    expect(
      screen.getByText('Get 20% OFF When You Book A Spa Day For Your Animal Today!')
    ).toBeInTheDocument();
  });

  it('renders a Header in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(
      <ThemeProvider theme={commonTheme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getAllByText('Главная')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Информация')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Спа Услуги')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Записаться на Прием')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Блог')[0]).toBeInTheDocument();
    expect(screen.getAllByText('О Нас')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Контакты')[0]).toBeInTheDocument();
  });
});
