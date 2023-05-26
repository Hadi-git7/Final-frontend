import React, { useEffect, useState } from 'react'
import './Activity.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import activity from './activityy-dsff.jpg'


function Activity() {

  const [youngerCards, setYoungerCards] = useState([]);
  const [olderCards, setOlderCards] = useState([]);
  const [familyCards, setFamilyCards] = useState([]);
  const [visibleYounger, setVisibleYounger] = useState(3);
  const [showYounger, setShowYounger] = useState(false);
  const [visibleOlder, setVisibleOlder] = useState(3);
  const [showOlder, setShowOlder] = useState(false);
  const [visibleFamily, setVisibleFamily] = useState(3);
  const [showFamily, setShowFamily] = useState(false);


  const showMoreYounger = () => {
    if (!showYounger) {
      setVisibleYounger((prevValue) => prevValue + youngerCards.length);
    } else {
      setVisibleYounger((prevValue) => prevValue - youngerCards.length);
    }
  };

  const showMoreOlder = () => {
    if (!showOlder) {
      setVisibleOlder((prevValue) => prevValue + olderCards.length);
    } else {
      setVisibleOlder((prevValue) => prevValue - olderCards.length);
    }
  };

  const showMoreFamily = () => {
    if (!showFamily) {
      setVisibleFamily((prevValue) => prevValue + familyCards.length);
    } else {
      setVisibleFamily((prevValue) => prevValue - familyCards.length);
    }
  };

  const youngerRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/younger');
      const res = await response.json();
      setYoungerCards(res)
    } catch (err) {
      console.log(err)
    }

  }

  const olderRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/older');
      const res = await response.json();
      setOlderCards(res)
    } catch (err) {
      console.log(err)
    }

  }


  const familyRequest = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/family');
      const res = await response.json();
      setFamilyCards(res)
    } catch (err) {
      console.log(err)
    }

  }

  useEffect(() => {
    youngerRequest();
    olderRequest();
    familyRequest();
    Aos.init();
  }, [])

  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="section-header text-center">
            <h2 id='activity-header' className="fw-bold fs-1" data-aos="zoom-out"
              data-aos-easing="linear"
              data-aos-duration="1500">
              <span id="activity-orange"> Activities </span>
              for
              <span className="b-class-secondary"> You </span>
              and Your
              <span className="b-class-secondary"> Child </span>


            </h2>
            {/* <p className="sec-icon"><i className="fa-solid fa-gear"></i></p> */}
          </div>
        </div>
        <div className='activity-img'>
        <img  src={activity} alt='eyyy' />
        </div>
        <div className='acitivity-content'>
          <h2 id='acitivity-content-title'>
            <span id='activity-span'>Activities </span>
            You Can Do At Home</h2>
          <p id='activity-content-description'>Because Dravet syndrome may often keep your family at home, it can help to get creative
            when it comes to finding things to do. Here are some age-appropriate ideas that promote learning but
            don’t require too much planning ahead. These ideas come from other parents and caregivers—people who understand
            what it’s like to have a child with Dravet syndrome.</p>
        </div>
        <div id='younger-children'>
          <h2><span id='activity-span'> Younger Children</span></h2>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {youngerCards &&
              youngerCards.slice(0, visibleYounger).map((obj) => {
                return (
                  <div key={obj._id} className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src={obj.cardImage.url} alt='activity' />
                      </div>
                      <h3>{obj.cardTitle}</h3>
                      <p>
                        {obj.cardDescription}
                      </p>
                    </div>
                  </div>)
              })}

            <div className='activity-div-button'>
              <NavLink to='/activity'>
                <button className='activity-button' onClick={() => {
                  showMoreYounger();
                  setShowYounger(!showYounger);
                }}>
                  <div className='activity-button__line'></div>
                  <div className='activity-button__line'></div>
                  <span className='activity-button__text'>
                    {!showYounger ? "See More" : "See Less"}
                  </span>
                  <div className='activity-button__drow1'></div>
                  <div className='activity-button__drow2'></div>
                </button>
              </NavLink>
            </div>

          </div>
        </div>
        <hr />
        <div id='older-children'>
          <h2><span id='activity-span'> Older Children</span></h2>
          <p id='activity-text'>These activities can be fun for adults with Dravet syndrome, too.</p>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {olderCards &&
              olderCards.slice(0, visibleOlder).map((obj) => {
                return (
                  <div key={obj._id} className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src={obj.cardImage.url} alt='activity' />
                      </div>
                      <h3>{obj.cardTitle}</h3>
                      <p>
                        {obj.cardDescription}
                      </p>
                    </div>
                  </div>)
              })}

            <div className='activity-div-button'>
              <NavLink to='/activity'>
                <button className='activity-button' onClick={() => {
                  showMoreOlder();
                  setShowOlder(!showOlder);
                }}>
                  <div className='activity-button__line'></div>
                  <div className='activity-button__line'></div>
                  <span className='activity-button__text'>
                    {!showOlder ? "See More" : "See Less"}
                  </span>
                  <div className='activity-button__drow1'></div>
                  <div className='activity-button__drow2'></div>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <hr />
        <div id='family'>
          <h2>
          Fun Activities for the <span id='activity-span'>Entire Family</span></h2>
          <p id='activity-text'>In families with multiple children, it can be difficult to get everyone together.
             We understand that it can be even more challenging in families who have a child with Dravet syndrome.
             6 Here are some easy, fun activities that the family can do together:</p>
          <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
            {familyCards &&
              familyCards.slice(0, visibleFamily).map((obj) => {
                return (
                  <div key={obj._id} className="col">
                    <div className="service-card">
                      <div className="icon-wrapper">
                        <img src={obj.cardImage.url} alt='activity' />
                      </div>
                      <h3>{obj.cardTitle}</h3>
                      <p>
                        {obj.cardDescription}
                      </p>
                    </div>
                  </div>)
              })}

            <div className='activity-div-button'>
              <NavLink to='/activity'>
                <button className='activity-button' onClick={() => {
                  showMoreFamily();
                  setShowFamily(!showFamily);
                }}>
                  <div className='activity-button__line'></div>
                  <div className='activity-button__line'></div>
                  <span className='activity-button__text'>
                    {!showFamily ? "See More" : "See Less"}
                  </span>
                  <div className='activity-button__drow1'></div>
                  <div className='activity-button__drow2'></div>
                </button>
              </NavLink>
            </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Activity