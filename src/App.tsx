// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import LearningTablePage from './LearningTable/LearningTablePage.tsx';
import CryptoTablePage from './CryptoTable/CryptoTablePage.tsx';

function App(){
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/LearningTable" Component={LearningTablePage} />
        <Route path="/CryptoTable" Component={CryptoTablePage} />
      </Routes>
    </Router>
  );
};

export default App;
