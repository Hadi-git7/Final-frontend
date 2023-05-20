import React from 'react'
import './HomeLanding.css'
import Smiley from './smileyyy.png'
import Child from './cutebby.png'
import Butterfly from './butterfly.png'
function HomeLanding() {

  return (
    <div className='landing-container'>
      <div className="left-landing">
        <h1 className='landing-title'>Welcome to a world of love, laughter, and endless fun especially designed for brave hearts with Dravet Syndrome!</h1>
        <img src={Smiley} alt='smiley' className='Smiley'/>
      </div>
      <div className="right-landing">
        <div className="content">
          <p className='rcp'>Dravet syndrome is an intractable developmental and epileptic encephalopathy that begins in infancy and proceeds with accumulating morbidity that significantly impacts individuals throughout their lifetime. Dravet syndrome is a rare disease, with an estimated incidence rate of 1:15,700, with the majority of patients carrying a mutation in the sodium channel gene SCN1A.
          </p>
          <img className='butterfly' src={Butterfly} alt='butterfly'/>
        </div>
        <div className="right-image">
        <img src={Child} alt='child' className='Child'/>
        </div>
      </div>
    </div>
  )
}

export default HomeLanding