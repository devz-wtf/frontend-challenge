import { render, screen } from '@testing-library/react';
import ArticleList from '../pages/ArticleList';

test('renders article list', async () => {
  render(<ArticleList />);
  expect(await screen.findByText(/loading/i)).toBeInTheDocument();
});
