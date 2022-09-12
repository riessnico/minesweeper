import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Top } from './components/Top';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <Top feature="Flag" firstAction="ctrl" secondAction="click">
    Minesweeper
  </Top>,
);
