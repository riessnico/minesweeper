import React from 'react';
import styled from '@emotion/styled';

export interface LegendProps {
  /**
   * feature that should be activated after frst+second actions
   */
  feature: string;
  /**
   * first action
   */
  firstAction: string;
  /**
   * second action
   */
  secondAction: string;
}

export const Legend: React.FC<LegendProps> = ({
  feature,
  firstAction,
  secondAction,
}) => (
  <Parent>
    <strong>{feature}: </strong>
    <FlagComboParent>
      <code>
        <FirstAction>{firstAction}</FirstAction> +{' '}
        <SecondAction>{secondAction}</SecondAction>
      </code>
    </FlagComboParent>
  </Parent>
);

const FlagComboParent = styled.code`
  background: #e3e3e3;
`;

export const Parent = styled.legend`
  font-size: 1em;
  margin: 0 auto 2vw;
  line-height: 1.25em;
`;

const FirstAction = styled.span`
  color: #ec433c;
`;

const SecondAction = styled.span`
  color: #2a48ec;
`;
