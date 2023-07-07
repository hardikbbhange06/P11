import React, { useRef } from 'react'

function UseRef() {
    const inputRef= useRef(null);

    function onchange(){
        inputRef.current.value="";
    };

  return (
<>
    <div  className='App'>
    <h1>UseRef</h1>
    <input type="text" ref={inputRef}   placeholder='ex..'/>
    <button onClick={onchange} >On  Change</button>
    
    </div>
</>
  )
}

export default UseRef