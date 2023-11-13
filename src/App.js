import logo from './logo.svg';
import './App.css';

import { AgGridReact } from 'ag-grid-react';

import { useState, useEffect, useMemo, useCallback, useRef } from 'react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


function App() {

  const gridRef = useRef();

  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Focus', price: 40000 },
    { make: 'Toyota', model: 'Celica', price: 45000 },
    { make: 'BMW', model: '4 Seriess', price: 50000 }
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);

  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true
  }), []);

  const cellClickedListener = useCallback(e => {
    console.log('cellClicked', e);
  });

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  const pushMeClicked = useCallback( e => {
    gridRef.current.api.deselectAll();
  });

  return (
    //class name matches theme name that is imported
    <div className='ag-theme-alpine-dark'
      style={{ height: 500, width: 600 }}>
        <button onClick={pushMeClicked}>Push Me</button>
      <AgGridReact
        ref={gridRef}
        onCellClicked={cellClickedListener}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        rowSelection='multiple'
        animateRows={true}
      />
    </div>
  );
}

export default App;
