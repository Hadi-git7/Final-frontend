import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import logo from '../Navbar/Dravet Syndrome.png'
import {animateScroll} from 'react-scroll';



function Footer() {

  const handleLinkClick = () => {
    animateScroll.scrollToTop();
  }

  return (
    <div className='footer-container'>
      <div className="footer-left" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
       <NavLink to='/'><img src={logo} alt='logo' className='footer-logo'/></NavLink> 
        <p className='footer-left-p'>In the hearts of many, Dravet syndrome children are cherished and embraced with an overflowing love that celebrates their unique spirit and resilience.</p>
        <br/>
        <br />
        <p className='footer-left-p'>@ Copyright 2023 Hadi</p>
      </div>
      <div className='vertical-line'></div>
      <div className="footer-middle" data-aos="zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
        <h3 className='fm-title'>Navigation</h3>
        <div className='footer-links-wrap'>
          <NavLink className='footer-links' to='/home' >Home</NavLink>
          <NavLink className='footer-links' to='/overview'>Get Informed</NavLink>
          <NavLink className='footer-links' to='/resource'>Resources</NavLink>
          <NavLink className='footer-links' to='/activity'>Activities</NavLink>
          <NavLink className='footer-links' to='/blog'>Blogs</NavLink>
        </div>
        <div className='login-button-footer'>
        <NavLink to='login'><button onClick={handleLinkClick}>Login</button></NavLink> 
        </div>
      </div>

      <div className='vertical-line'></div>

      <div className="footer-right" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
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