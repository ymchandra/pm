import React from 'react';
import { render, screen } from '@testing-library/react';
import PasswordManager from './PasswordManager';

test('renders learn react link', () => {
  render(<PasswordManager />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
