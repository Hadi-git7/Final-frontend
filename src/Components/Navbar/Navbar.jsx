import React, { useState } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import logo from './Dravet Syndrome.png'
function Navbar() {
  let navigate = useNavigate()
  const [show, setShow] = useState(false)

  function openMenu(){
    setShow(!show)
  }

  function navDeactive(){
    setShow(false)
    navigate('/login')
  }
  return (
    <div className='Navbar-container'>

     <NavLink to='/' className="activee"> <img src={logo} className='Navbar-logo' alt='logo' /></NavLink>
        <div className={show ? 'links_wrapper nzale' : 'links_wrapper'}>
            <NavLink to='/' onClick={()=>setShow(false)}>Home</NavLink>
            <NavLink to='/overview' onClick={()=>setShow(false)}>Get Informed</NavLink>
            <NavLink to='/resource' onClick={()=>setShow(false)}>Caregivers</NavLink>
            <NavLink to='/activity' onClick={()=>setShow(false)}>Activities</NavLink>
            {/* <NavLink to='/blog' onClick={()=>setShow(false)}>Blogs</NavLink> */}
            <button className='login-button'onClick={navDeactive}>LogIn</button>
        </div>
        <button className='Ham'  onClick={openMenu}> <FaBars className='Ham'/></button>

    </div>
  )
}

export default Navbar
