import React from 'react';
import './Navbar.css';
import {BsPlusCircleFill} from 'react-icons/bs';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const dispatch=useDispatch();
  return (
    <div className='navbar_container'>
      <div>
        MegaLoop
      </div>
      <div>
        <BsPlusCircleFill className='icon' onClick={()=>{dispatch({type:"ADD"})}} />
      </div>
    </div>
  )
}

export default Navbar
