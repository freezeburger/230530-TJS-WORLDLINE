import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuBar from './MenuBar';

describe('<MenuBar />', () => {
  test('it should mount', () => {
    render(<MenuBar />);
    
    const menuBar = screen.getByTestId('MenuBar');

    expect(menuBar).toBeInTheDocument();
  });
});