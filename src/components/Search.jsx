import React from 'react';


const formStyle = {
  textAlign: 'center',
  margin: '20px',
};

const inputStyle = {
  padding: '8px',
  marginRight: '8px',
};

const buttonStyle = {
  padding: '8px 12px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const Search = ({ searchQuery, setSearchQuery, onSearch }) => {
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Enter a recipe..."
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Search
      </button>
    </form>
  );
};

export default Search;