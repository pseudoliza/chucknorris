import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  background-color: #f5f5f5;
  padding: 16px;
`;

export const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const NavigationItem = styled.li`
  margin-right: 16px;
`;

export const NavigationLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f44336;
  }
`;