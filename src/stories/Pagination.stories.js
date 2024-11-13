// Pagination.stories.js
import React, { useState } from 'react';
import Pagination from './Pagination';

export default {
  title: 'Example/Pagination',
  component: Pagination,
};

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = args.totalPages || 5; 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};

export const Pages = Template.bind({});
Pages.args = {
  totalPages: 15, 
};

