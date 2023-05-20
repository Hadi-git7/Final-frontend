import React,{useEffect} from 'react'
import './HomeResource.css'
import resource from './resources.png'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'

function HomeResource() {

  useEffect(()=>{
    Aos.init();
  },[])

  return (
    <div className="homeresource-container">
      <h1 className='resources-title' data-aos="fade-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">Resources</h1>

    <div className="cards">
    <div className='resource-card' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
      <div className="resource-card-image">
      <img src={resource} alt='resource' />
      </div>
      <div className="resource-card-title">
        <h4 id='fontsize'>Newly Diagnosed Resources</h4>
      </div>
      <div className="resource-card-description">
        <h4 id='fontsize'>Lorem ipsum dolor sit amet consectetur  lorem adipisicing elit. Nisi delectus, enim minus cumque rem dolore sequi nobis nesciunt itaque dolores odio cupiditate perspiciatis maiores nostrum magni incidunt hic vero ea.</h4>
      </div>
    </div>

    <div className='resource-card' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
      <div className="resource-card-image">
      <img src={resource} alt='resource' />
      </div>
      <div className="resource-card-title">
        <h4 id='fontsize'>Newly Diagnosed Resources</h4>
      </div>
      <div className="resource-card-description">
        <h4 id='fontsize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, enim minus cumque rem dolore sequi nobis nesciunt itaque dolores odio cupiditate perspiciatis maiores nostrum magni incidunt hic vero ea.</h4>
      </div>
    </div>

    <div className='resource-card' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
      <div className="resource-card-image">
      <img src={resource} alt='resource' />
      </div>
      <div className="resource-card-title">
        <h4 id='fontsize'>Newly Diagnosed Resources</h4>
      </div>
      <div className="resource-card-description">
        <h4 id='fontsize'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, enim minus cumque rem dolore sequi nobis nesciunt itaque dolores odio cupiditate perspiciatis maiores nostrum magni incidunt hic vero ea.</h4>
      </div>
    </div>

    <div className='resource-card' data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="800">
      <div className="resource-card-image">
      <img src={resource} alt='resource' />
      </div>
      <div className="resource-card-title">
        <h4 id='fontsize'>Newly Diagnosed Resources</h4>
      </div>
      <div className="resource-card-description">
        <h4 >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi delectus, enim minus cumque rem dolore sequi nobis nesciunt itaque dolores odio cupiditate perspiciatis maiores nostrum magni incidunt hic vero ea.</h4>
      </div>
    </div>
    </div>
  </div>
  )
}

export default HomeResource