import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer-container'>
      <div className="footer-left">
        <h2 className='footer-logo'>LOGO</h2>
        <p className='footer-left-p'>In the hearts of many, Dravet syndrome children are cherished and embraced with an overflowing love that celebrates their unique spirit and resilience.</p>
        <br/>
        <br />
        <p className='footer-left-p'>@ Copyright 2023 Hadi</p>
      </div>
      <div className='vertical-line'></div>
      <div className="footer-middle">
        <h3 className='fm-title'>Navigation</h3>
        <div className='footer-links'>
          <NavLink className='footer-links' to='/home' >Home</NavLink>
          <NavLink className='footer-links' to='/overview'>Get Informed</NavLink>
          <NavLink className='footer-links' to='/resource'>Resources</NavLink>
          <NavLink className='footer-links' to='/activity'>Activities</NavLink>
          <NavLink className='footer-links' to='/blog'>Blogs</NavLink>
        </div>
        <div className='login-button-footer'>
          <button >LogIn</button>
        </div>
      </div>

      <div className='vertical-line'></div>

      <div className="footer-right">
      <h3 className='rm-title'>Show some love</h3>
      <p className='footer-right-p'>Love knows no bounds, and even the smallest donations towards people with Dravet syndrome can bring immeasurable joy to their hearts</p>
      <br/>
      <div className='donate-button-footer'>
         <button >Donate</button>
      </div>
      </div>

    </div>
  )
}

export default Footer