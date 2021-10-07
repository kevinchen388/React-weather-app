import React, { useState } from 'react';
import Switch from "react-switch";

const ToggleButton = ({ units, onUnitsChange }) => {
  const [isImperial, setIsImperial] = useState( units === 'imperial' ? true : false);

  const handleChange = () => {
    onUnitsChange(units === 'imperial' ? 'metric' : 'imperial');
    setIsImperial(!isImperial);
  }


  return (
    <div>
      {/* <p>Imperial</p>
      <p>Metric</p>
      <button text="Change units" onClick={handleChange}>
        {isImperial ? 'Imperial' : 'Metric'}
      </button>

      <label className="switch">
        <input type="checkbox"></input>
        <span className="slider round"></span>
      </label> */}
    

      <label htmlFor="small-radius-switch">
        <Switch
          checked={isImperial}
          onChange={handleChange}
          handleDiameter={28}
          offColor="#66AFD5"
          onColor="#66AFD5"
          offHandleColor="#FFFFFF"
          onHandleColor="#FFFFFF"
          height={40}
          width={70}
          borderRadius={20}
  
          uncheckedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 16,
                color: "#FFFFFF",
                paddingRight: 2
              }}
            >
              F°
            </div>
          }
          checkedIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                fontSize: 16,
                color: "#FFFFFF",
                paddingRight: 2
              }}
            >
              C°
            </div>
          }
          uncheckedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#2685BD",
                fontSize: 16
              }}
            >
              C°
            </div>
          }
          checkedHandleIcon={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                color: "#2685BD",
                fontSize: 16
              }}
            >
              F°
            </div>
          }
          className="react-switch"
          id="small-radius-switch"
        />
      </label>


    </div>

  )

}

export default ToggleButton
