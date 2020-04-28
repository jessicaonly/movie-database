import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './searchBar.css';


function SearchBar() {
  return (
    <div className='search-wrapper'>
      <div className='search-bar'>
        <FontAwesomeIcon className='search-icon' icon={faSearch} />
        <input className='search-input' placeholder='Search Movies' type='text' />
      </div>
    </div>
  );
}

export default SearchBar;
