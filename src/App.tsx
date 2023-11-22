// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.tsx';
import SecondPage from './SecondPage.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/second-page" Component={SecondPage} />
      </Routes>
    </Router>
  );
};

export default App;
