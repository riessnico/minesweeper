import React from 'react';
import { Field, Coords } from '@/helpers/Field';
import styled from '@emotion/styled';
import { FC } from 'react';
import { CellComponent } from './Cell';

export interface GridProps {
  /**
   * Field data
   */
  children: Field;
  /**
   * onClick handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMenu handler
   */
  onContextMenu: (coords: Coords) => void;
}

export const Grid: FC<GridProps> = ({ children, ...rest }) => (
  <Wrapper size={children.length}>
    {children.map((row, y) =>
      row.map((cell, x) => (
        <CellComponent key={`${y}_${x}_${cell}`} coords={[y, x]} {...rest}>
          {cell}
        </CellComponent>
      )),
    )}
  </Wrapper>
);

interface WrapperProps {
  size: number;
}

const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, auto);
  width: max-content;
  padding: 1vw;
`;
