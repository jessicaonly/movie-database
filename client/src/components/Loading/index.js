import React from 'react';
import './Loading.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
      <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    )
  }
}

export default Loading;


