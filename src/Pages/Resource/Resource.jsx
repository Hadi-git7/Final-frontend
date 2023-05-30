import React, { useEffect, useState } from 'react'
import './Resource.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import resourcepic from './dravetkiss.jpg';


function Resource() {

  const [resource, setResource] = useState([]);
  const [visibleResources, setVisibleResources] = useState(3);
  const [showResources, setShowResources] = useState(false);


  const showMoreResources = () => {
    if (!showResources) {
      setVisibleResources((prevValue) => prevValue + resource.length);
    } else {
      setVisibleResources((prevValue) => prevValue - resource.length);
    }
  };

  const Request = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/resource');
      const res = await response.json();
      setResource(res);
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    Request();
    Aos.init();
  }, [])

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
        {resource &&
          resource.slice(0, visibleResources).map((obj) => {
            return (
              <div key={obj._id} className='resource-card-page' >
                <div className="resource-card-image">
                  <img src={`${obj.cardImage.url}`} alt='resource' />
                </div>
                <div className="resource-card-title">
                  <h4 id='fontsize'>{obj.cardTitle}</h4>
                </div>
                <div className="resource-card-description">
                  <h4 id='fontsize'>{obj.cardDescription}</h4>
                </div>
              </div>
            );
          })}

        <div className='resource-div-button'>
          <NavLink to='/resource'>
            <button className='resource-button' onClick={() => {
              showMoreResources();
              setShowResources(!showResources);
            }}>
              <div className='resource-button__line'></div>
              <div className='resource-button__line'></div>
              <span className='resource-button__text'>
                {!showResources ? "See More" : "See Less"}

              </span>
              <div className='resource-button__drow1'></div>
              <div className='resource-button__drow2'></div>
            </button>
          </NavLink>
        </div>

      </div>
    </div>
  )
}

export default Resource