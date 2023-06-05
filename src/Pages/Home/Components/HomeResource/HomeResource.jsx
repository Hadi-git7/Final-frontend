import React, { useEffect } from 'react'
import './HomeResource.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import res1 from '../../../Resource/res1.png'
import financial from '../../../Resource/financial.png'
import medical from '../../../Resource/medical.png'
import {animateScroll} from 'react-scroll';


function HomeResource() {


  const handleLinkClick = () => {
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <div className="homeresource-container">
      <h1 className='resources-title' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">Resources</h1>

      <div className="cards">
      <div  className='resource-card-page' >
          <div className="resource-card-image">
            <img src={res1} alt='resource' />
          </div>
          <div className="resource-card-title">
            <h4 id='fontsize'>Newly Diagnosed Resources</h4>
          </div>
          <div className="resource-card-description">
            <p id='fontsize'>
              <NavLink to='https://dravetfoundation.org/caregiver-resources/newly-diagnosed/'>Newly Diagnosed Information</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/caregiver-resources/dsf-family-network/'>Register for Newly Diagnosed Kit</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/caregiver-resources/super-siblings-club/'>Caregiver & Sibling Resource Kits</NavLink>
            </p>
          </div>
        </div>
        <div  className='resource-card-page' >
          <div className="resource-card-image">
            <img src={medical} alt='resource' />
          </div>
          <div className="resource-card-title">
            <h4 id='fontsize'>Medical Resources</h4>
          </div>
          <div className="resource-card-description">
            <p id='fontsize'>
              <NavLink to='https://dravetfoundation.org/caregiver-resources/comprehensive-care-centers/'>Comprehensive Care Centers</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/caregiver-resources/find-a-doctor/'>Find a Doctor</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/dsf-funded-research/treatment-pipeline/'>Learn about Clinical Trials</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/hcp-resources/surgery-in-dravet-syndrome/'>Surgery & Dravet Syndrome</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/hcp-resources/diagnosis-and-treatment/'>International Treatment</NavLink>
            </p>
          </div>
        </div>

        <div  className='resource-card-page' >
          <div className="resource-card-image">
            <img src={financial} alt='resource' />
          </div>
          <div className="resource-card-title">
            <h4 id='fontsize'>Financial Resources</h4>
          </div>
          <div className="resource-card-description">
            <p id='fontsize'>
              <NavLink to='https://dravetfoundation.org/caregiver-resources/disaster-relief-fund/'>Disaster Relief & Recovery Fund</NavLink>
              <br />
              <NavLink to='https://www.zerotothree.org/'>Early Intervention Programs</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/caregiver-resources/pag-application/'>DSF Patient Assistance Grants</NavLink>
            </p>
          </div>
        </div>

        



        <div className='resource-div-button'>
          <NavLink to='/resource' >
            <button className='resource-button' onClick={handleLinkClick} >
              <div className='resource-button__line'></div>
              <div className='resource-button__line'></div>
              <span className='resource-button__text'>SHOW MORE</span>
              <div className='resource-button__drow1'></div>
              <div className='resource-button__drow2'></div>
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default HomeResource