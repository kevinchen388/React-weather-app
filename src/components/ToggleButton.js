import React from 'react'

const ToggleButton = (props) => {
  function handleToggle(props.toggle) {
    // Here, we invoke the callback with the new value
    props.onChange(event.target.value);
}

  return (
    <div>
      <p>props.toggle</p>
      <p>C°</p>
      <p>F°</p>
      <button text="click me" onClick={handleToggle}></button>
    </div>
  )
}

export default ToggleButton
