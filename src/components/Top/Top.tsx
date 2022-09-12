import React from 'react';
import styled from '@emotion/styled';
import { Legend, LegendProps } from './Legend';
import { GameName, GameNameProps } from './GameName';

export type TopComponentType = LegendProps & GameNameProps;

export const Top: React.FC<TopComponentType> = ({
  children,
  ...legendProps
}) => (
  <Header>
    <GameName>{children}</GameName>
    <Legend {...legendProps} />
  </Header>
);

const Header = styled.header`
  text-align: center;
  position: relative;
  display: inline-block;
`;
