import React from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CryptoTable from './CryptoTable.tsx';

function CryptoTablePage() {
  return (
    <div>
      <CryptoTable />
    </div>
  );
}

export default CryptoTablePage;