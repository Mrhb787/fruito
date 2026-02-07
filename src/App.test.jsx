import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders welcome message', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headings = screen.getAllByText(/Welcome to Fruito/i);
  expect(headings[0]).toBeInTheDocument();
});
