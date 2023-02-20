import React, { useState } from 'react';
import Item from './Item';

function Page( props ) {
    const products = props.products
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    
    const totalPages = Math.ceil(products.length / itemsPerPage)
    const pageNumbers = [];

    // Add the backward arrow button
    pageNumbers.push(
        <button key="back" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
        {'<'}
        </button>
    );
  
    // Add page number buttons
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
        <button key={i} className={i === currentPage ? 'active' : null} onClick={() => setCurrentPage(i)}>
            {i}
        </button>
        );
    }
  
    // Add the forward arrow button
    pageNumbers.push(
        <button key="next" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
        {'>'}
        </button>
    );

    const items = currentItems.map(product => {
        return (
            <Item key={product.name} product={product}  updateCart={props.updateCart}/>
        )
    })

    return (
        <div className='shopper'>
            <div className="main-shop">
                {items}
            </div>

            <div className='page-control'>
                {pageNumbers}
            </div>
        </div>
    );
}

export default Page