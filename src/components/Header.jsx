import React from 'react';

const Header = () => {
  const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
  };

  return <h1 style={headerStyle}>Recipe Finder</h1>;
};

export default Header;