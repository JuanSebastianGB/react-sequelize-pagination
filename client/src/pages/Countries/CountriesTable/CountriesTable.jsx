import { Fragment, useEffect, useState } from 'react';
import { fetchCountries } from '../../../services/countries.service';
import styles from './CountriesTable.module.css';

const CountriesTable = () => {
  const [countries, setCountries] = useState([]);
  const [information, setInformation] = useState({
    limit: 0,
    page: 0,
    totalPages: 0,
    totalRows: 0,
  });
  const [search, setSearch] = useState('');

  const handleNext = () => {
    if (information.page === information.totalPages) return;
    setInformation(data => ({ ...data, page: data.page + 1 }));
  };
  const handlePrev = () => {
    if (information.page === 0) return;
    setInformation(data => ({ ...data, page: data.page - 1 }));
  };

  const getCountries = async () => {
    try {
      const data = await fetchCountries(information.page, search);
      const { limit, page, totalPages, totalRows } = data;
      console.log(data);
      setCountries(data.result);
      setInformation({
        limit,
        page,
        totalPages,
        totalRows,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCountries();
  }, [information.page, search]);

  return (
    <div className={styles['countries-table']}>
      <h2 className={styles.title}>Countries</h2>
      <div>
        <input
          className={styles.input}
          type='text'
          placeholder='Search...'
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <div className={styles.filter}>
          {information.page > 0 && <button onClick={handlePrev}>Prev</button>}

          {information.page < information.totalPages - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
        <div> Page: {information.page + 1}</div>
        <div> Total Pages: {information.totalPages}</div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Continent</th>
            </tr>
          </thead>
          <tbody>
            {!!countries &&
              countries.map((country, index) => {
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
      </div>
    </div>
  );
};

export default CountriesTable;
