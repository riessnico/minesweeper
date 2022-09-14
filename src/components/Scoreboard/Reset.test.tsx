import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Reset } from './Reset';

describe('Reset button check', () => {
  const ResetWithDummyHandlerOnReset: React.FC = () => (
    <Reset onReset={() => null} />
  );

  it('should render elemens with default state', () => {
    render(<ResetWithDummyHandlerOnReset />);

    expect(screen.getByText('😊')).toBeInTheDocument();
  });
  it('onReset handler should be called', () => {
    const onReset = jest.fn();

    render(<Reset onReset={onReset} />);

    fireEvent.click(screen.getByText('😊'));

    expect(onReset).toBeCalled();
  });
  it('should change state when onMouseDown and MouseUp events happens', () => {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByText('😊'));

    expect(screen.getByText('😮')).toBeInTheDocument();

    fireEvent.mouseUp(screen.getByText('😮'));

    expect(screen.getByText('😊')).toBeInTheDocument();
  });
  it('should change state when onMouseDown and MouseLeave events happens', () => {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByText('😊'));

    expect(screen.getByText('😮')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText('😮'));

    expect(screen.getByText('😊')).toBeInTheDocument();
  });
});
