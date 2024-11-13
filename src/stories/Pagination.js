
import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        disabled={currentPage === 1}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        Previous
      </button>

      {[...Array(totalPages).keys()].map((i) => (
        <button
          key={i}
          className={`pagination__button ${currentPage === i + 1 ? 'active' : ''}`}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="pagination__button"
        disabled={currentPage === totalPages}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
