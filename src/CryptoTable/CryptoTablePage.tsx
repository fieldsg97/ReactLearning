import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CryptoTable from './CryptoTable.jsx';

function CryptoTablePage() {
  return (
    <div>
      <CryptoTable />
    </div>
  );
}

export default CryptoTablePage;