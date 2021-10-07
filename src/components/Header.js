import React from 'react';
// import locationIcon from '../images/location_on.svg';

const Header = (props) => {

  return (
    <header>
      
      <h1><img src='../images/location_on.svg' alt='location icon' className='location'/>{props.location}</h1>
      <p>{props.date}</p>
    </header>
  )
}

Header.defaultProps = {
  location: 'Chicago, IL',
}

export default Header
