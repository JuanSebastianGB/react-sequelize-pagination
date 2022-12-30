import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const CountryContext = createContext({});

export const CountryProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  return (
    <CountryContext.Provider value={{ page, setPage }}>
      {children}
    </CountryContext.Provider>
  );
};

CountryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  return context;
};
