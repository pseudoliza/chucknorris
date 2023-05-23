import React from 'react';
import { ROUTES } from '../../constants/routes';
import { NavigationContainer, NavigationItem, NavigationLink, NavigationList } from './Navigation.styles';

export const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to={ROUTES.ROOT}>Home</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to={ROUTES.FAVOURITES}>Favourites</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

export default Navigation;