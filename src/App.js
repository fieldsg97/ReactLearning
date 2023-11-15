
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
// import './customStyles.css';
import CryptoTable from './CryptoTable/CryptoTable';
import LearningTable from './LearningTable/LearningTable';

function App() {

  return (
    <div
      style={{ width: '100%', height: '50vh'}}>
      <LearningTable/>
      <CryptoTable />
    </div>
  );
}

export default App;
