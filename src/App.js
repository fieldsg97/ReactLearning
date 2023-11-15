
import './App.css';

import { AgGridReact } from 'ag-grid-react';

import { useState, useEffect, useMemo, useRef } from 'react';

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";


import useClassNameToggle from './CustomHooks/themeButtonToggleHook';
import './customStyles.css';

import CryptoTable from './CryptoTable';

function App() {

  const gridRef = useRef();

  const { isToggled, toggleClassName } = useClassNameToggle();

  /*
  rowData: This state is an array of objects representing rows of data for a table.
  Each object has properties such as 'make', 'model', and 'price',
  representing the car make, model, and price, respectively.
  */
  const [rowData, setRowData] = useState([
    { make: 'Ford', model: 'Focus', price: 40000 },
    { make: 'Toyota', model: 'Celica', price: 45000 },
    { make: 'BMW', model: '4 Seriess', price: 50000 }
  ]);


  /*
  columnDefs: This state is an array of objects defining the columns for the table.
  Each object in the array has a 'field' property,
  indicating which property of the objects in rowData
  should be displayed in that column.
  In this case, the columns are defined for 'make', 'model', and 'price'.
  */
  const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ]);


  /*
useMemo: This hook is used to memoize the result of a function. It takes two arguments: a function and a dependency array.
The function is only re-executed when one of the dependencies in the array changes.
{ sortable: true, filter: true }: This is an object representing default column options.
In the context of a table, it suggests that each column is sortable and has a filter.
[]: The dependency array is empty ([]),
which means that the memoized result is calculated only once when the component mounts.
Since there are no dependencies, the memoized result remains the same throughout the component's lifecycle.
  */
  const defaultColDef = useMemo(() => ({
    sortable: true,
    filter: true
  }), []);

  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/row-data.json')
      .then(result => result.json())
      .then(rowData => setRowData(rowData))
  }, []);

  //ternary operator variable for changing buttonText based on current theme
  const buttonText = isToggled ? 'Dark Mode' : 'Light Mode';
  const buttonStyle = isToggled ? "buttonDarkMode" : "buttonLightMode";



  return (
    //class name matches theme name that is imported
    <div className={isToggled ? 'ag-theme-alpine' : 'ag-theme-alpine-dark'}
    style={{ width: '100%', height: '50vh' }}>
        <button className={buttonStyle} data-testid="themeButton" onClick={toggleClassName}>{buttonText}</button>
      <AgGridReact
        ref={gridRef}
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        animateRows={true}
        style={{ width: '100%', height: '50vh' }}
      />
       <h1 className='bitcoinPriceHeader'>Current Bitcoin Price</h1>
      <CryptoTable />
    </div>
  );
}

export default App;
