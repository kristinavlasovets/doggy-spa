import React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { render, screen } from '@testing-library/react';

import CopyrightMenu from '.';

jest.mock('next/navigation');

describe('Copyright Menu', () => {
  it('renders a CopyrightMenu in english via cookie variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <CopyrightMenu variant="cookie" />
      </ThemeProvider>
    );

    expect(screen.getByText('Cookie Policy')).toBeInTheDocument();
    expect(screen.getByText('Cookies Settings')).toBeInTheDocument();
  });

  it('renders a CopyrightMenu in english via alternate variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <CopyrightMenu variant="terms" />
      </ThemeProvider>
    );

    expect(screen.getByText('Terms')).toBeInTheDocument();
    expect(screen.getByText('Privacy')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders a CopyrightMenu in russian via cookie variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(
      <ThemeProvider theme={commonTheme}>
        <CopyrightMenu variant="cookie" />
      </ThemeProvider>
    );

    expect(screen.getByText('Политика файлов Cookie')).toBeInTheDocument();
    expect(screen.getByText('Настройки файлов Cookie')).toBeInTheDocument();
  });

  it('renders a CopyrightMenu in russian via alternate variant', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(
      <ThemeProvider theme={commonTheme}>
        <CopyrightMenu variant="terms" />
      </ThemeProvider>
    );

    expect(screen.getByText('Правила')).toBeInTheDocument();
    expect(screen.getByText('Конфиденциальность')).toBeInTheDocument();
    expect(screen.getByText('Безопасность')).toBeInTheDocument();
  });
});
