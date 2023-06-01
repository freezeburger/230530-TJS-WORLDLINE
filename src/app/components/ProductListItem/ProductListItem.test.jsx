import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductListItem from './ProductListItem';

describe('<ProductListItem />', () => {
  test('it should mount', () => {
    render(<ProductListItem />);
    
    const productListItem = screen.getByTestId('ProductListItem');

    expect(productListItem).toBeInTheDocument();
  });
});