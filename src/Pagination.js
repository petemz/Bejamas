import React from 'react';

function Pagination (props)  {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='paginate'>
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <span onClick={() => props.paginate(number)} className='page-link'>
              {number}
            </span>
          </div>
        ))}
    </nav>
  );
};

export default Pagination;