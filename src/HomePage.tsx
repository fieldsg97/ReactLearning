import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function HomePage() {
  return (
    <div>
      <h1>Home Page - CFA Learning</h1>
      {/* <BrowserRouter>
      <Link to="/App">
        <button>Learning Table Page</button>
      </Link>
      </BrowserRouter> */}
    </div>
  );
}

export default HomePage;
