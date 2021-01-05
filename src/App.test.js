import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

// a simple test to check some text is rendered in the react component
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/type to change the via handler/i);
  expect(linkElement).toBeInTheDocument();
});
