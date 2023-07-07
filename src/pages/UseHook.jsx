import React from 'react'
import UseState from './usehook/UseState'
import UseState12 from './usehook/UseState12'
import UseReducer from './usehook/UseReducer'
import UseEffectt from './usehook/UseEffectt'
import UseRef from './usehook/UseRef';
import "./UseHook.css"
import SideBar from '../components/Sidebar/SideBar'


function UseHook() {
  return (
    <SideBar>
    <div className='App'>
   
     
     
      <UseState />
      <br />
      <UseState12 />
      <br />
      <UseReducer />
      <br />
      <UseEffectt />
      <br />
      <UseRef />
      
    </div>
    </SideBar>
  )
}

export default UseHook