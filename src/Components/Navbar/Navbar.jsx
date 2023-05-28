import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false)

  function openMenu(){
    setShow(!show)
  }
  return (
    <div className='Navbar-container'>

      <h2 className='Navbar-logo'>LOGO</h2>
        <div className={show ? 'links_wrapper nzale' : 'links_wrapper'}>
            <NavLink to='/' onClick={()=>setShow(false)}>Home</NavLink>
            <NavLink to='/overview' onClick={()=>setShow(false)}>Get Informed</NavLink>
            <NavLink to='/resource' onClick={()=>setShow(false)}>Resources</NavLink>
            <NavLink to='/activity' onClick={()=>setShow(false)}>Activities</NavLink>
            <NavLink to='/blog' onClick={()=>setShow(false)}>Blogs</NavLink>
            <div className='login-button' onClick={()=>setShow(false)}>
              <NavLink  to='/login' onClick={()=>setShow(false)}><button >LogIn</button></NavLink>
            </div>
        </div>
        <button className='Ham'  onClick={openMenu}> <FaBars className='Ham'/></button>

    </div>
  )
}

export default Navbar
