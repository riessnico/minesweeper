import styled from '@emotion/styled';
import React from 'react';
import { Cell as CellType, CellState, Coords } from '@/helpers/Field';
import { useMouseDown } from '@/hooks/useMouseDown';

export interface CellProps {
  /**
   * Cell status based on cellType
   */
  children: CellType;
  /**
   * Cell coordinates
   */
  coords: Coords;
  /**
   * onClick by cell handler
   */
  onClick: (coords: Coords) => void;
  /**
   * onContextMeny by cell handler
   */
  onContextMenu: (coords: Coords) => void;
}

export const checkCellIsActive = (cell: CellType) =>
  [CellState.hidden, CellState.flag, CellState.weakFlag].includes(cell);

export const CellComponent: React.FC<CellProps> = ({
  children,
  coords,
  ...rest
}) => {
  const [mouseDown, onMouseDown, onMouseUp] = useMouseDown();

  const onClick = () => rest.onClick(coords);

  const onContextMenu = (elem: React.MouseEvent<HTMLElement>) => {
    /**
     * Prevent context menu by default
     */
    elem.preventDefault();

    if (checkCellIsActive(children)) {
      rest.onContextMenu(coords);
    }
  };

  const props = {
    onClick,
    onContextMenu,
    'data-testid': `${children}_${coords}`,
    onMouseDown,
    onMouseUp,
    onMouseLeave: onMouseUp,
    mouseDown,
  };

  return <ComponentsMap {...props}>{children}</ComponentsMap>;
};

interface ComponentsMapProps {
  children: CellType;
  onClick: (elem: React.MouseEvent<HTMLDivElement>) => void;
  onContextMenu: (elem: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown: () => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  mouseDown: boolean;
  'data-testid'?: string;
}

const ComponentsMap: React.FC<ComponentsMapProps> = ({ children, ...rest }) => {
  const nonActiveCellProps = {
    onContextMenu: rest.onContextMenu,
    'data-testid': rest['data-testid'],
  };

  switch (children) {
    case CellState.empty:
      return <RevealedFrame {...nonActiveCellProps} />;
    case CellState.bomb:
      return (
        <BombFrame {...nonActiveCellProps}>
          <Bomb />
        </BombFrame>
      );
    case CellState.flag:
      return (
        <ClosedFrame {...rest}>
          <Flag />
        </ClosedFrame>
      );
    case CellState.weakFlag:
      return (
        <ClosedFrame {...rest}>
          <WeakFlag />
        </ClosedFrame>
      );
    case CellState.hidden:
      return <ClosedFrame {...rest} />;
    default:
      return <RevealedFrame {...nonActiveCellProps}>{children}</RevealedFrame>;
  }
};

interface ClosedFrameProps {
  mouseDown?: boolean;
}

export const ClosedFrame = styled.div<ClosedFrameProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  width: 1.8vw;
  height: 1.8vw;
  background-color: #d1d1d1;
  border: 0.6vh solid transparent;
  border-color: ${({ mouseDown = false }) =>
    mouseDown ? 'transparent' : 'white #e9e9e9 #e9e9e9 white'};
  &:hover {
    filter: brightness(1.05);
  }
`;

const transparent = 'rgba(0,0,0,0)';
const colors: { [key in CellType]: string } = {
  0: '#000',
  1: '#2a48ec',
  2: '#2bb13d',
  3: '#ec6561',
  4: '#233db7',
  5: '#a6070f',
  6: '#e400af',
  7: '#906a02',
  8: '#fa0707',
  9: transparent,
  10: transparent,
  11: transparent,
  12: transparent,
};

const RevealedFrame = styled(ClosedFrame)`
  border-color: #dddddd;
  cursor: default;
  color: ${({ children }) => colors[children as CellType] ?? transparent};
  &:hover {
    filter: brightness(1);
  }
`;

const Bomb = styled.div`
  border-radius: 50%;
  width: 1vh;
  height: 1vh;
  background-color: #333;
`;

const BombFrame = styled(RevealedFrame)`
  background-color: #ec433c;
`;

const Flag = styled.div`
  width: 0px;
  height: 0px;
  border-top: 0.5vh solid transparent;
  border-bottom: 0.5vh solid transparent;
  border-left: 0.5vh solid #ec433c;
`;

const WeakFlag = styled(Flag)`
  border-left: 0.5vw solid #f19996;
`;
