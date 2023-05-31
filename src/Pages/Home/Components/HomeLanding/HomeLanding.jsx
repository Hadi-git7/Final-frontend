import React, { useEffect, useState } from 'react'
import './HomeLanding.css'

function HomeLanding() {
  const [landing , setLanding] = useState('')


  const Request = async () => {
    try {
      const response = await fetch('https://dravet-syndrome.onrender.com/api/home');
      const res = await response.json();
      setLanding(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    Request();
  }, []);

  return (
    <div className='landing-container'>
      <div className="left-landing">
        <h1 className='landing-title'>{landing[0]?.introduction}</h1>
        <img src={landing[0]?.firstImage.url} alt='smiley' className='Smiley'/>
      </div>
      <div className="right-landing">
        <div className="content">
          <p className='rcp'>{landing[0]?.description}
          </p>
          <img className='butterfly' src={landing[0]?.secondImage.url} alt='butterfly'/>
        </div>
        <div className="right-image">
        <img src={landing[0]?.thirdImage.url} alt='child' className='Child'/>
        </div>
      </div>
    </div>
  )
}

export default HomeLanding