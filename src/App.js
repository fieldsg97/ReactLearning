
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import CryptoTable from './CryptoTable/CryptoTable.tsx';
import LearningTable from "./LearningTable/LearningTable.tsx";
import { Link } from 'react-router-dom';

function App() {

  return (
    <div
      style={{ width: '100%', height: '50vh'}}>
              {/* <Link to="/second-page">
        <button>Go to Second Page</button>
      </Link> */}
      <LearningTable/>
      <CryptoTable />
    </div>
  );
}

export default App;
