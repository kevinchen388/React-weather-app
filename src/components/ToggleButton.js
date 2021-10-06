import React, { useState } from 'react';

const ToggleButton = ({ units, onUnitsChange }) => {
  const [isMetric, setIsMetric] = useState( units.match(/metric/i) ? true : false);

  const handleChange = () => {
    onUnitsChange(units.match(/metric/i) ? 'imperial' : 'metric');
    setIsMetric(!isMetric);
  }


  return (
    <div>
      <p>props.toggle</p>
      <p>C°</p>
      <p>F°</p>
      <button text="click me" onClick={handleChange}></button>
    </div>
  )
  
}

export default ToggleButton
