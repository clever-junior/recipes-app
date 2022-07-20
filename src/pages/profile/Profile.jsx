import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Profile(props) {
  const { history } = props;
  const [user, setUser] = useState('');

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('user'));
    setUser(result.email);
    console.log(history);
  }, []);

  function btnLogout() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <div>
      <Header
        currentPage="profile"
        history={ history }
        isSearchBar={ false }
      />
      <div>
        <h3
          data-testid="profile-email"
        >
          { user }
        </h3>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => console.log('Done Recipes') }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => console.log('Favorite Recipes') }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ btnLogout }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.shape(
    PropTypes.func.isRequired,
  ).isRequired,
};
