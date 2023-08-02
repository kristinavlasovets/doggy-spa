import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Newsletter from '.';

describe('Newsletter', () => {
  it('shows a warning message when trying to send invalid data', async () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Newsletter variant="footer" />
      </ThemeProvider>
    );
    const send = screen.getByText('Submit')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });
  });
});
