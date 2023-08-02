import React from 'react';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import SignUp from '.';

jest.mock('next/navigation');

describe('SignUp', () => {
  it('renders a SignUp in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <SignUp />
      </ThemeProvider>
    );

    expect(screen.getByText('Sign Up to Bark Newsletter')).toBeInTheDocument();
    expect(screen.getByText('Get 10% Off Your First Spa Treatment')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(
      screen.getByText(
        '*By completing this form you are signing up to receive our emails and can unsubscribe at any time.'
      )
    ).toBeInTheDocument();
  });

  it('renders a SignUp in russian', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'ru');
    render(
      <ThemeProvider theme={commonTheme}>
        <SignUp />
      </ThemeProvider>
    );

    expect(screen.getByText('Подпишитесь на новостную рассылку Bark')).toBeInTheDocument();
    expect(screen.getByText('Получите скидку 10% на первую спа-процедуру')).toBeInTheDocument();
    expect(screen.getByText('Подписаться')).toBeInTheDocument();
    expect(
      screen.getByText(
        '*Заполняя эту форму, вы подписываетесь на получение наших электронных писем и можете отказаться от подписки в любое время.'
      )
    ).toBeInTheDocument();
  });

  it('shows a warning message when trying to send invalid data', async () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(
      <ThemeProvider theme={commonTheme}>
        <SignUp />
      </ThemeProvider>
    );
    const send = screen.getByText('Sign Up')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });
});
