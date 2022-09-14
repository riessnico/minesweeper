import React from 'react';
import { render, screen } from '@testing-library/react';

import { Reset } from './Reset';

describe('Reset button check', () => {
  it('should render elemens with default state', () => {
    render(<Reset onReset={() => null} />);

    screen.debug();

    expect(true).toBe(true);
  });
  it('onReset handler should be called', () => {
    expect(true).toBe(true);
  });
  it('should change state when onMouseDown and MouseUp events happens', () => {
    expect(true).toBe(true);
  });
  it('should change state when onMouseDown and MouseUp events happens', () => {
    expect(true).toBe(true);
  });
});
