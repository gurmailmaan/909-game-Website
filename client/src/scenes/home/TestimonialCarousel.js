import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/testimonials.css';
import img from "../../components/9on9-logo.png"
const TestimonialCarousel = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="reviews" key={index}>
          <img src={img} alt="Login-icon" />
          <div className="text">
          <h3>{testimonial.author}</h3>
          <p>{testimonial.text}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
