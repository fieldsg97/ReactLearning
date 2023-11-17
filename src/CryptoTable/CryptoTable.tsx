import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import axios from 'axios';
import { ColDef, ColGroupDef } from 'ag-grid-community';

interface CurrencyData {
  currency: string;
  rate: string;
  description: string;
}

const CryptoTable: React.FC = () => {
  const [rowData, setRowData] = useState<CurrencyData[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
      const data: { bpi: Record<string, { rate: string; description: string }> } = response.data;
      
      const currencyData: CurrencyData[] = Object.entries(data.bpi).map(([currency, data]) => ({
        currency,
        rate: data.rate,
        description: data.description,
      }));
      
      setRowData(currencyData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once, similar to componentDidMount

  const handleRefresh = () => {
    fetchData();
  };

  const columnDefs = [
    { headerName: 'Currency', field: 'currency', sortable: true, filter: true },
    { headerName: 'Rate', field: 'rate', sortable: true, filter: true },
    { headerName: 'Description', field: 'description', sortable: true, filter: true },
  ] as (ColDef<CurrencyData, any> | ColGroupDef<CurrencyData>)[]; // Explicitly cast to mutable type

  return (
    <div>
      <h1>Bitcoin Price Tracker</h1>
      <div>
        <button
          className="refreshCryptoButton"
          onClick={handleRefresh}
          data-testid="refreshCryptoButton"
          style={{ height: '40px', width: '600px' }}
        >
          Refresh
        </button>
      </div>
      <div className="ag-theme-alpine-dark" style={{ height: '400px', width: '600px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          pagination={true}
          paginationPageSize={10}
          animateRows={true}
        />
      </div>
    </div>
  );
};

export default CryptoTable;

