import React, { useState, useMemo } from 'react';
import './Table.css';

const Table = ({ data, columns, rowsPerPage, isLoading }) => {
  const [sortConfig, setSortConfig] = useState(null);
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Sorting the data based on the sortConfig
  const sortedData = useMemo(() => {
    let sortableItems = [...data];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [data, sortConfig]);

  // Handle sorting request
  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // Pagination logic
  const pageCount = Math.ceil(data.length / rowsPerPage);
  const currentData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev < pageCount ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Toggle row expansion
  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div>
      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                onClick={() => requestSort(column.key)}
                className={sortConfig && sortConfig.key === column.key ? sortConfig.direction : ''}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            // Show skeleton loading when data is loading
            [...Array(rowsPerPage)].map((_, index) => (
              <tr key={index}>
                {columns.map((column, colIndex) => (
                  <td key={colIndex} className="skeleton"></td>
                ))}
              </tr>
            ))
          ) : (
            currentData.map((row, index) => (
              <React.Fragment key={index}>
                <tr onClick={() => toggleRow(index)}>
                  {columns.map((column) => (
                    <td key={column.key}>{row[column.key]}</td>
                  ))}
                </tr>
                {expandedRow === index && (
                  <tr className="expanded-row">
                    <td colSpan={columns.length}>
                      <div>
                        <p><strong>Details:</strong> {row.details}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>{currentPage} / {pageCount}</span>
        <button onClick={nextPage} disabled={currentPage === pageCount}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Table;
