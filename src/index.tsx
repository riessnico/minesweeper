import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Top } from './components/Top';
import { Scoreboard } from './components/Scoreboard';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <Top feature="Flag" firstAction="ctrl" secondAction="click">
      Minesweeper123
    </Top>
    <Scoreboard
      time="000"
      levels={['beginner', 'intermediate', 'expert']}
      mines="010"
      onReset={() => null}
    />
  </>,
);
