import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {

  const date = new Date();
  console.log(date);

  return (
    <header>
      <h1>{props.location}</h1>
      <p>{date}</p>
    </header>
  )
}

Header.defaultProps = {
  location: 'Chicago, IL',
}

Header.propTypes = {
  location: PropTypes.string
}

export default Header
