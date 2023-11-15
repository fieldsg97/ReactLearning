
import './App.css';

import { AgGridReact } from 'ag-grid-react';

import { useState, useEffect, useMemo, useRef } from 'react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


import useClassNameToggle from './CustomHooks/themeButtonToggleHook';
import './customStyles.css';

import CryptoTable from './CryptoTable';
import LearningTable from './LearningTable';

function App() {

  return (
    <div
      style={{ width: '100%', height: '50vh' }}>
      <LearningTable />
      <h1 className='bitcoinPriceHeader'>Current Bitcoin Price</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
