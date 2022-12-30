import { Fragment } from 'react';

import PropTypes from 'prop-types';
import styles from '../CountriesWithSwr.module.css';

const CountriesWithSwrTable = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Continent</th>
        </tr>
      </thead>
      <tbody>
        {!!data?.result &&
          data?.result.map((country, index) => {
            return (
              <Fragment key={index}>
                <tr>
                  <td>{country.Code2}</td>
                  <td>{country.Name}</td>
                  <td>{country.Continent}</td>
                </tr>
              </Fragment>
            );
          })}
      </tbody>
    </table>
  );
};

CountriesWithSwrTable.propTypes = {
  data: PropTypes.object,
};

export default CountriesWithSwrTable;
