import { useState } from 'react';
import useSWR from 'swr';
import { buildUrl, fetcher } from '../../../services/countries.service';
import { useCountryContext } from '../CountryProvider';
import styles from './CountriesWithSwr.module.css';
import CountriesWithSwrTable from './CountriesWithSwrTable/CountriesWithSwrTable';
import Pagination from './Pagination/Pagination';

const CountriesWithSwr = () => {
  const { page, setPage } = useCountryContext();
  const [search, setSearch] = useState('');
  const { data } = useSWR(buildUrl(page, search), fetcher);
  console.log(data);

  const handleNext = () => {
    if (page === data?.totalPages) return;
    setPage(prev => prev + 1);
  };
  const handlePrev = () => {
    if (page === 0) return;
    setPage(prev => prev - 1);
  };
  const handleSearch = e => {
    setSearch(e.target.value);
    setPage(0);
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
          onChange={handleSearch}
        />
        <div className={styles.filter}>
          {page > 0 && <button onClick={handlePrev}>Prev</button>}

          {page < data?.totalPages - 1 && (
            <button onClick={handleNext}>Next</button>
          )}
        </div>
        <div> Page: {page + 1}</div>
        <div> Total Pages: {data?.totalPages}</div>
        <Pagination totalPages={data?.totalPages} />
        {!!data?.result && <CountriesWithSwrTable data={data} />}
        <Pagination totalPages={data?.totalPages} />
      </div>
    </div>
  );
};

export default CountriesWithSwr;
