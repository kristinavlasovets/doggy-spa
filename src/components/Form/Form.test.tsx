import React from 'react';
import { ThemeProvider } from 'styled-components';

import { commonTheme } from '@/styles/theme';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import Form from '.';

describe('Form', () => {
  it('shows warning messages when trying to send invalid data', async () => {
    render(
      <ThemeProvider theme={commonTheme}>
        <Form />
      </ThemeProvider>
    );
    const send = screen.getByText('Book Appointment')!;

    await waitFor(() => {
      fireEvent.click(send);
    });

    await waitFor(() => {
      expect(screen.getByText('First Name is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Last Name is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Choose at least one timeslot')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Credit Card Number is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Expiry Date is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('CVV is required')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Name On Card is required')).toBeInTheDocument();
    });
  });
});
