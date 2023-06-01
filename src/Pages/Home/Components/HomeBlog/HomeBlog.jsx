import React from 'react'
import './HomeBlog.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeBlog() {

  const quotes = [
    "Every child with Dravet syndrome is a warrior, facing battles others can hardly imagine. Your strength inspires us all.",
    "In the midst of darkness, Dravet syndrome children bring light and love to the world. Their spirits shine brighter than any star.",
    "Dravet syndrome may be a part of their journey, but it does not define them. These children are filled with limitless potential and boundless love.",
    "The resilience and courage displayed by Dravet syndrome children is nothing short of remarkable. They are true heroes in every sense.",
    "In the face of adversity, Dravet syndrome children teach us the power of resilience, the beauty of innocence, and the importance of cherishing every moment."
    ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds) as desired
  };

  return (
   
   <div className='blog-container'>
        <Slider {...carouselSettings} className='for-color'>
          {quotes.map((quote, index) => (
            <div key={index} >
              <p className="blog-p"> “{quote}”</p>
            </div>
          ))}
        </Slider>  
        </div>
  )
}

export default HomeBlog