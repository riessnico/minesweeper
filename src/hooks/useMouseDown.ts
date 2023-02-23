import { Prettify } from '@/types/prettify';
import { useState, useDebugValue } from 'react';

export type SetMouseStatusDown = () => void;
export type SetMouseStatusUp = () => void;

export type useMouseDownType = Prettify<
  [boolean, SetMouseStatusDown, SetMouseStatusUp]
>;

export const useMouseDown = (): useMouseDownType => {
  const [mouseDown, setMouseDown] = useState(false);

  useDebugValue(`mouseDown: ${mouseDown}`);

  const onMouseDown = () => setMouseDown(true);
  const onMouseUp = () => setMouseDown(false);

  return [mouseDown, onMouseDown, onMouseUp];
};
