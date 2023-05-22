import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={ROUTES.ROOT}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.FAVOURITES}>Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;