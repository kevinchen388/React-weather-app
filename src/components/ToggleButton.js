import React from 'react'

const ToggleButton = (props) => {

  const onClick = () => {
    console.log('Clicked')
  }

  return (
    <button onClick={onClick} className='btn'> Button </button>        
  )
}

export default ToggleButton
