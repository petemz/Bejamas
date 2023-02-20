import React, { useState, useEffect } from 'react';

function CheckboxFilter({ filters }) {
    return (
      <div className='top-filter'>
        {filters.map(filter => (
          <label key={filter}>
            <input type="checkbox" value={filter} />
            {filter}
          </label>
        ))}
      </div>
    );
  }
  

export default CheckboxFilter