/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';

describe('Index Page', () => {
  it('h1 text: Welcome to PAPA', () => {
    // setup
    render(<Index />);

    // result
    const h1 = screen.getByRole('heading', { name: 'Welcome to PAPA' });

    // assertion
    expect(h1).toBeInTheDocument();
  });
});
