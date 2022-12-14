import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Carousel({ recommendation }) {
  const [recommend, setRecommend] = useState([]);

  useEffect(() => {
    const fill = () => {
      const newResult = recommendation.filter((_item, index) => index <= +'5');
      setRecommend(newResult);
    };
    fill();
  }, [recommendation]);

  return (
    <div
      className="carousel__track"
      style={ {
        // padding: '10px',
        margin: 0,
        listStyle: 'none',
        display: 'flex',
        width: '99%',
        overflow: 'scroll',
        overflowX: 'auto',
        overflowY: 'hidden',
      } }
      // data-testid="recomendation-card"
    >
      { recommend.map((item, index) => (
        <div
          key={ index }
          className="carousel__slide"
          data-testid={ `${index}-recomendation-card` }
          style={ {
            minWidth: '160px',
            padding: '8px',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          } }
        >
          <img
            width="100%"
            height="200px"
            src={ item.MealThumb || item.DrinkThumb }
            alt={ item.Meal || item.Drink }
          />
          <p>{ item.Category }</p>
          <h5
            data-testid={ `${index}-recomendation-title` }
          >
            { item.Meal || item.Drink }
          </h5>
        </div>
      ))}
    </div>
  );
}

Carousel.propTypes = {
  recommendation: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};
