import React from 'react';
import "./Idpage.css"
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import SideBar from '../../components/Sidebar/SideBar';

function Idpage() {
    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/users');
      };
  return (
    <SideBar>
        <div className='Idpage'>
            <p  className='Idpage1'>Idpage</p>  
            <button onClick={navigateHome}>Back</button>
                </div>
    </SideBar>
    
  )
}

export default Idpage;