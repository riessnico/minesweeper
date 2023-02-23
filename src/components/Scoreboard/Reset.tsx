import React from 'react';
import styled from '@emotion/styled';
import { useMouseDown } from '@/hooks/useMouseDown';

export interface ResetProps {
  /**
   * reset action handler
   */
  onReset: () => void;
}

export const Reset: React.FC<ResetProps> = ({ onReset }) => {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

  return (
    <Button
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseUp}
      onMouseUp={onMouseUp}
      onClick={onReset}
    >
      {mouseDown ? '😮' : '😊'}
    </Button>
  );
};

const Button = styled.button`
  font-size: 1.5vw;
  cursor: pointer;
  font-weight: 700;
  border-style: solid;
  border-width: 0.15vw;
  background-color: #d1d1d1;
  border-color: white #9e9e9e #9e9e9e white;
`;
