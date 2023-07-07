import React, { useState } from 'react'

function UseState() {
  const [value,setValue] = useState(0)
  function increment(){
    setValue(value+1)
  }

  return (
    <>
    <div className='App'>
    
   <h1>useState</h1>

    <div>
    {value}  <br />
    <button  onClick={increment}>Increment</button>
    </div>
    <br /><br />
   

    </div>
    </>
  )
}







export default UseState;