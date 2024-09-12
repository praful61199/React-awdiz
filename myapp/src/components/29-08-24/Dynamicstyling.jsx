import React, { useState } from 'react'
import './Dynamic.css'
const DynamicStyling = () => {
    const [isButtonActive, setIsButtonActive] = useState(false);
  
    function changeStatus() {
      setIsButtonActive(!isButtonActive);
    }
    return (
      <div className="main">
        <p>Check status :</p>
        <button 
          onClick={changeStatus}
          className={isButtonActive ? "active" : "not-active"}
        > 
          {isButtonActive ? "Active" : "Not Active"}
        </button>
      </div>
    );
  };
  export default DynamicStyling;
