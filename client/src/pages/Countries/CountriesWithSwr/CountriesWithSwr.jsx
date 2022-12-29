import { Fragment, useState } from 'react';
import useSWR from 'swr';
import { buildUrl, fetcher } from '../../../services/countries.service';
import styles from './CountriesWithSwr.module.css';

const CountriesWithSwr = () => {
  const [page, setPage] = useState(0);

  const [search, setSearch] = useState('');

  const { data, mutate } = useSWR(buildUrl(page, search), fetcher);

  const handleNext = () => {
    if (data.page === data.totalPages) return;
    mutate({ ...data, page: data.page + 1 });
  };
  const handlePrev = () => {
    if (data.page === 0) return;
    mutate({ ...data, page: data.page - 1 });
  };

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
          {data?.page > 0 && <button onClick={handlePrev}>Prev</button>}

          {data?.page < data?.totalPages - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
        <div> Page: {data?.page + 1}</div>
        <div> Total Pages: {data?.totalPages}</div>
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
      </div>
    </div>
    // <>
    //   <h2>Countries</h2>
    //   {JSON.stringify(data?.result)}
    // </>
  );
};

export default CountriesWithSwr;
