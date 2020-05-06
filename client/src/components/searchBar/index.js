import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './searchBar.css';


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  }

  handleInput = (e) => {
    this.setState({ value: e.target.value });
  }

  checkForSubmit = (e) => {
    if (e.key === 'Enter') {
      this.props.searchMovies(this.state.value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div className='search-wrapper'>
        <div className='search-bar'>
          <FontAwesomeIcon className='search-icon' icon={faSearch} />
          <input
            className='search-input'
            placeholder='Search Movies'
            type='text'
            value={this.state.value}
            onChange={this.handleInput}
            onKeyDown={(e) => this.checkForSubmit(e)}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
