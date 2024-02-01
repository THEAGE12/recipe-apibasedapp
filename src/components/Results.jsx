import React, { useState } from 'react';


const cardStyle = {
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  margin: '10px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '300px', 
  display: 'inline-block', 
  verticalAlign: 'top',
  background: '#fff',
  transition: 'box-shadow 0.3s ease',
  fontFamily: 'Arial, sans-serif',
};

const buttonStyle = {
  padding: '8px 12px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  margin: '5px',
  transition: 'background-color 0.3s ease',
};

const linkStyle = {
  color: '#3498db',
  textDecoration: 'none',
  margin: '5px',
  display: 'block',
  textAlign: 'center',
  transition: 'color 0.3s ease',
};

const noDataStyle = {
  textAlign: 'center',
  color: '#777',
  marginTop: '20px',
};

const headerStyle = {
  fontSize: '1.5em',
  margin: '0 0 10px',
  fontWeight: 'bold',
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '10px',
  transition: 'transform 0.3s ease',
};

const paragraphStyle = {
  margin: '10px 0',
  lineHeight: '1.5',
};

const Results = ({ recipes }) => {
 
  const [expandedState, setExpandedState] = useState({});

  const handleReadMore = (recipe) => {
    
    setExpandedState((prevState) => ({
      ...prevState,
      [recipe.idMeal]: !prevState[recipe.idMeal],
    }));
  };

  if (!recipes || recipes.length === 0) {
    return <div style={noDataStyle}>No data found</div>;
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Results</h2>
      <ul style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
        {recipes.map((recipe) => (
          <li
            key={recipe.idMeal}
            style={{ ...cardStyle, transition: 'box-shadow 0.3s ease, transform 0.3s ease' }}
          >
            <h3 style={headerStyle}>{recipe.strMeal}</h3>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              style={{ ...imageStyle, transform: 'scale(1)' }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <p style={paragraphStyle}>
              {expandedState[recipe.idMeal]
                ? recipe.strInstructions
                : `${recipe.strInstructions.substring(0, 100)}...`}
            </p>
            <button style={buttonStyle} onClick={() => handleReadMore(recipe)}>
              {expandedState[recipe.idMeal] ? 'Read Less' : 'Read More'}
            </button>
            <ul style={{ paddingInlineStart: '20px', marginBottom: '10px' }}>
              <li>{recipe.strIngredient1} - {recipe.strMeasure1}</li>
              <li>{recipe.strIngredient2} - {recipe.strMeasure2}</li>
              
            </ul>
            <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Watch on YouTube
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
