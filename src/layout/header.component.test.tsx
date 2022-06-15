import React from 'react';

import { render, screen } from '~/test/utils';

import Header from './header.component';

describe('Header', () => {
  it('should render the header', () => {
    render(<Header />);
    expect(
      screen.getByRole('link', { name: /tailwindcss mastery/i }),
    ).toBeInTheDocument();
  });
});
