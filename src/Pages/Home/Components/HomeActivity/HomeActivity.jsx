import React, { useEffect, useState } from 'react';
import './HomeActivity.css';
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import {animateScroll} from 'react-scroll';

function HomeActivity() {
  const [activity, setActivity] = useState([]);

  const Request = async () => {
    try {
      const response = await fetch('https://dravet-syndrome.onrender.com/api/younger');
      const res = await response.json();
      setActivity(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLinkClick = () => {
    animateScroll.scrollToTop();
  }

  useEffect(() => {
    Request();
    Aos.init();
  }, []);

  const displayActivities = activity.slice(0, 3); // Limit to three cards

  return (
    <section id="advertisers" className="advertisers-service-sec pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div
            className="section-header text-center"
            data-aos="zoom-out"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <h2 className="fw-bold fs-1">
              Our <span className="b-class-secondary">Activities</span>
            </h2>
          </div>
        </div>
        <div className="row mt-5 mt-md-4 row-cols-1 row-cols-sm-1 row-cols-md-3 justify-content-center">
          {displayActivities.map((obj) => {
            return (
              <div key={obj._id} className="col">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <img src={obj.cardImage.url} alt="activity" />
                  </div>
                  <h3>{obj.cardTitle}</h3>
                  <p>{obj.cardDescription}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="activity-div-button">
          <NavLink to="/activity">
            <button className="activity-button" onClick={handleLinkClick}>
              <div className="activity-button__line"></div>
              <div className="activity-button__line"></div>
              <span className="activity-button__text">SHOW MORE</span>
              <div className="activity-button__drow1"></div>
              <div className="activity-button__drow2"></div>
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default HomeActivity;
