import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { Legend } from './components/Top/Legend';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<Legend />);
