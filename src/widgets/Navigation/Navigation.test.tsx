import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './Navigation';
import { ROUTES } from '../../constants/routes';

describe('Navigation', () => {
  it('renders tabs with correct links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toHaveAttribute('href', ROUTES.ROOT);

    const favouritesLink = screen.getByRole('link', { name: /favourites/i });
    expect(favouritesLink).toHaveAttribute('href', ROUTES.FAVOURITES);
  });
});
