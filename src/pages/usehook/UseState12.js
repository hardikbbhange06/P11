import React, { useState } from 'react';

function UseState12() {
    const [text1, setTest1]=useState("har")

    function textChange(e){
        const newValue=e.target.value;
        setTest1(newValue)

    }
  return (
    <>
    <div className='App'>
    <h1>useState</h1>
        <input type="text" placeholder='text ...'  onChange={textChange} /><br />
        {text1}
    </div>
    </>
  )
}

export default UseState12