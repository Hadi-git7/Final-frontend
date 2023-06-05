import React, { useEffect, useState } from 'react'
import './Resource.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import resourcepic from './dravetkiss.jpg';
import res1 from './res1.png'
import additional from './additional.png'
import financial from './financial.png'
import international from './international.png'
import medical from './medical.png'
import seizure from './seizure.png'
import Aos from 'aos';
import Loader from '../Loader/Loader'

function Resource() {

  const [loading, setIsLoading] = useState(true);


  useEffect(()=>{
    Aos.init();
  })

  useEffect(()=>{
    setTimeout(()=>{
    setIsLoading(false)
    },3000)
  })


  if(loading){
    return <Loader/>
  }
  return (
    <div className="resource-container">
      <div className='hero-resource-container'>
        <div className='hero-resource-image'>
          <img src={resourcepic} alt='resource' />
        </div>
        <div className='hero-resource-content'>
          <h2 className='hero-resource-content-h2'> Caregiver Resources</h2>
          <p className='hero-resource-content-p'>We help you to address the challenges of living with Dravet syndrome through a variety of resources and support options.
          </p>
        </div>
      </div>
      <div className="resource-description">
        <p className='resource-description-p'>We want you to know you’re not alone. Our mission is to aggressively raise funds for Dravet syndrome and related epilepsies; to support and fund research; increase awareness; and to provide support to affected individuals and families. We help you do that by addressing the challenges of living with Dravet syndrome through a variety of resources and support options, including:</p>
        <ul className='resource-description-ul'>
          <li>Information about Dravet syndrome including <span className='links-navigate'><NavLink to='/overview'> symptoms, diagnosis and treatment.</NavLink></span></li>
          <li>Programs for <span className='links-navigate'><NavLink to='/activity'>families and siblings </NavLink></span> who also experience the effects of this diagnosis.</li>
        </ul>
      </div>
      <div id='resource-cardss' className="cards">
 

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

        <div  className='resource-card-page' >
          <div className="resource-card-image">
            <img src={seizure} alt='resource' />
          </div>
          <div className="resource-card-title">
            <h4 id='fontsize'>Seizure Tracking & Rescue Medications</h4>
          </div>
          <div className="resource-card-description">
            <p id='fontsize'>
              <NavLink to='https://seizureactionplans.org/'>Seizure Action Plan (SAP) Coalition</NavLink>
              <br />
              <NavLink to='https://www.seizuretracker.com/'>Seizure Diary - Seizure Tracker</NavLink>

            </p>
          </div>
        </div>

        <div  className='resource-card-page' >
          <div className="resource-card-image">
            <img src={international} alt='resource' />
          </div>
          <div className="resource-card-title">
            <h4 id='fontsize'>International Dravet Resources</h4>
          </div>
          <div className="resource-card-description">
            <p id='fontsize'>
              <NavLink to='https://dravet.eu/members-map/'>European Members</NavLink>
              <br />
              <NavLink to='https://www.dravet.org.uk/'>Dravet Syndrome UK</NavLink>
              <br />
              <NavLink to='https://dravet.ca/'>Dravet Canada</NavLink>
            </p>
          </div>
        </div>

        <div  className='resource-card-page' >
          <div className="resource-card-image">
            <img src={additional} alt='resource' />
          </div>
          <div className="resource-card-title">
            <h4 id='fontsize'>Additional Resources</h4>
          </div>
          <div className="resource-card-description">
            <p id='fontsize'>
              <NavLink to='https://angelflighteast.org/'>Angel Flights East</NavLink>
              <br />
              <NavLink to='https://www.angelflightne.org/'>Angel Flights NE</NavLink>
              <br />
              <NavLink to='https://www.caregiving.com/'>CareGiving.com</NavLink>
              <br />
              <NavLink to='https://courageousparentsnetwork.org//'>Courageous Parents Network</NavLink>
              <br />
              <NavLink to='https://www.dannydid.org/'>Danny Did</NavLink>
              <br />
              <NavLink to='https://dravetfoundation.org/caregiver-resources/patient-centered-research/'>Patient Centered Research</NavLink>
           
            </p>
          </div>
        </div>






      </div>
    </div>
  )
}

export default Resource