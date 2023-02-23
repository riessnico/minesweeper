import { useMouseDown } from './useMouseDown';
import { renderHook, act } from '@testing-library/react';

describe('useMouseDown hook teste', () => {
  it('should toggle state after onMouseDown/Up calls', () => {
    const { result } = renderHook(useMouseDown);

    const [mouseDown, onMouseDown, onMouseUp] = result.current;

    expect(mouseDown).toBe(false);

    act(onMouseDown);
    expect(result.current[0]).toBe(true);

    act(onMouseUp);
    expect(result.current[0]).toBe(false);
  });
});
