import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('axios');

beforeAll(() => {
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
});

test('renders without crashing', () => {
  render(<App />);
});
