// Code Keypad Component Here
import React from 'react'

const Keypad = () => {
    function handleChange() {
        console.log ('Entering password...');
    }
  return (
    <div>
        <input type= "password" onChange={handleChange}/>

    </div>
  )
}

export default Keypad
//'Entering password...'