import React from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

interface Props {
  children: React.ReactNode;
}

const RecipesProvider: React.FC<Props> = ({ children }) => {

  const findByZip = async (zip: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${zip}/json/`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  const findByAddress = async (state: string, city: string, street: string) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${state}/${city}%20/${street}/json/`);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  const providerState = {
    findByZip,
    findByAddress,
  };

  return (
    <myContext.Provider value={ providerState }>
      {children}
    </myContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RecipesProvider;
