import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { useCountryContext } from '../../CountryProvider';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages }) => {
  const { setPage } = useCountryContext();
  const handlePageClick = data => setPage(data.selected);
  return (
    <>
      <ReactPaginate
        breakLabel='...'
        nextLabel='next >'
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel='< previous'
        previousClassName={styles.prev}
        nextClassName={styles.next}
        pageClassName={styles.page}
        activeClassName={styles.active}
        renderOnZeroPageCount={null}
        marginPagesDisplayed={4}
        containerClassName={styles.pagination}
      />
    </>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalPages: PropTypes.number,
};

export default Pagination;
