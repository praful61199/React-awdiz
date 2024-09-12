import React, { memo } from 'react'

const AnotherComponent = ({counter2}) => {
    console.log("ReRender")
  return (
    <div>
       
        <h1> New  counter = {counter2}</h1>
        
      
    </div>
  )
}

export default memo( AnotherComponent);
