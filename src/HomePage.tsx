import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to my app!</h1>
      <Link to="/second-page">
        <button>Go to Second Page</button>
      </Link>
    </div>
  );
}
