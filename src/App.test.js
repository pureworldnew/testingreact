import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const appElement = screen.getByText('Where Do You Want To Go?');
  expect(appElement).toBeInTheDocument();
});
