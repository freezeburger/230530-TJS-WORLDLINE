import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroImage from './HeroImage';

describe('<HeroImage />', () => {
  test('it should mount', () => {
    render(<HeroImage />);
    
    const heroImage = screen.getByTestId('HeroImage');

    expect(heroImage).toBeInTheDocument();
  });
});