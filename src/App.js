import React, { useState } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';
import Header from './components/Header'

const appStyle = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
  padding: '20px',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
};

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
      setRecipes(response.data.meals);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div style={appStyle}>
      <Header/>
      <div style={containerStyle}>
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} onSearch={handleSearch} />
        <Results recipes={recipes} />
      </div>
    </div>
  );
};

export default App;