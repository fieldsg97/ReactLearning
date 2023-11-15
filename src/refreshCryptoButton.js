
import React from 'react';
import './customStyles.css';

const refreshCryptoButton = () => {
  return (
    <button className="refreshCryptoButton-pushable">
      <span className="refreshCryptoButton-shadow"></span>
      <span className="refreshCryptoButton-edge"></span>
      <span className="refreshCryptoButton-front text">
        Refresh
      </span>
    </button>
  );
};

export default refreshCryptoButton;

