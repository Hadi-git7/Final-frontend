import React, { useEffect, useState } from 'react'
import './HomeResource.css'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';


function HomeResource() {
  const [resource, setResource] = useState([]);

  const Request = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/resource');
      const res = await response.json();
      console.log(res)
      setResource(res)
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

      <div className="cards">
        {resource.map((obj) => {
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
            <button className='resource-button'>
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