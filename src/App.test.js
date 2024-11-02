import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});
