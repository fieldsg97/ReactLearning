
import { AgGridReact } from 'ag-grid-react';
import { useState, useEffect, useMemo, useRef } from 'react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import useClassNameToggle from '../CustomHooks/themeButtonToggleHook';
import './LearningTable.css'

const LearningTable = () => {

    const gridRef = useRef();
    const { isToggled, toggleClassName } = useClassNameToggle();

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
        <div>
        <div className={isToggled ? 'ag-theme-alpine' : 'ag-theme-alpine-dark'}
            style={{ width: '100%', height: '50vh', marginBottom: '100px'}}>
            <button className={buttonStyle} data-testid="themeButton" onClick={toggleClassName}>{buttonText}</button>
            <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                animateRows={true}
                style={{ width: '100%', height: '50vh' }}
            />
        </div>
        </div>
    );
}



export default LearningTable;