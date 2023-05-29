import React, { useEffect, useState } from 'react'
import './Resource.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import resourcepic from './dravetsmile.jpg';


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
    <div className="homeresource-container">
      <h1 className='resources-title' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">Resources</h1>
      <div className='resources-contentt'>
        <div className='resource-pic'>
          <img src={resourcepic} alt='resource' />
        </div>
        <div className='resource-desc'>
          <p>We help you to address the challenges of living with Dravet syndrome through a variety of resources and support options.We want you to know you’re not alone. Our mission is to aggressively raise funds for Dravet syndrome and related epilepsies; to support and fund research; increase awareness; and to provide support to affected individuals and families.
          </p>
        </div>
        <a href='#resource-cardss' className='scroll-resource'>Scroll Down  <BsFillArrowDownCircleFill style={{ color: '#ff9a43', marginTop: '10px', marginRight: '10px' }} />
        </a>
      </div>
      <div id='resource-cardss' className="cards">
        {resource &&
          resource.slice(0, visibleResources).map((obj) => {
            return (
              <div key={obj._id} className='resource-card' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
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