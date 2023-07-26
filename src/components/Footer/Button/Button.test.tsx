import React from 'react';
import { usePathname } from 'next/navigation';

import { render, screen } from '@testing-library/react';

import Button from '.';

jest.mock('next/navigation');

describe('Button', () => {
  it('renders a Button in english', () => {
    (usePathname as jest.Mock).mockImplementation(() => 'en');
    render(<Button />);

    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
