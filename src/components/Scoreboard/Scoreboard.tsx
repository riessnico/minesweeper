import React from 'react';
import styled from '@emotion/styled';

import { Counter } from './Counter';
import { Level } from './Level';
import { Reset } from './Reset';

export interface ScoreboardProps {
  /**
   * Timer
   */
  time: string;
  /**
   * possible game scenarios
   */
  levels: string[];
  /**
   * action handler when the gamereset button is clicked
   */
  onReset: () => void;
  /**
   * Bombs in the field
   */
  mines: string;
}

export const Scoreboard: React.FC<ScoreboardProps> = ({
  levels,
  mines,
  onReset,
  time,
}) => (
  <Wrapper>
    <Counter>{time}</Counter>
    <Level>{levels}</Level>
    <Reset onReset={onReset} />
    <Counter>{mines}</Counter>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: max-content;
  padding-bottom: 2vw;
  justify-content: space-between;
`;
