import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function HomePage() {
  return (
    <div>
      <h1>Home Page - CFA Learning</h1>
      <Link to="/LearningTablePage">
        <button>Learning Table Grid</button>
      </Link>
      <Link to="/CryptoTablePage">
        <button>Bitcoin Price Grid</button>
      </Link>
    </div>
  );
}

export default HomePage;
