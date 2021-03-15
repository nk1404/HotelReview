import { render, screen } from '@testing-library/react';
import {MemoryRouter} from "react-router-dom";
import App from './App';

test('renders home page', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const homePageElement = screen.getByText('Welcome to Premier Inn');
  expect(homePageElement).toBeInTheDocument();
});
