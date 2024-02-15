import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ambulance1 from '../Assets/ambulance4.png';
import ambulance2 from '../Assets/image2.png';
import ambulance3 from '../Assets/ambulance3.jpg';

const Hero = () => {
  const slides = [
    {
      image: ambulance1,
      title: 'Welcome to Our Ambulance Booking System',
      description: 'Instantly connect to fast and reliable ambulance services, all at your fingertips for immediate assistance.',
    },
    {
      image: ambulance2,
      title: 'State-of-the-Art Emergency Care',
      description: 'With cutting-edge equipment and highly trained professionals, we prioritize saving lives and delivering exceptional care.',
    },
    {
      image: ambulance3,
      title: 'Community Well-being Initiatives',
      description: 'Beyond emergency services, we are committed to community well-being. Our outreach programs focus on educating and engaging the community in health and safety initiatives.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="hero-slide">
            <div className="flex flex-col-reverse sm:flex-row items-center sm:h-auto h-screen bg-gray-100">
              <div className="p-4 text-center sm:text-left sm:w-1/2 sm:mx-4">
                <h2 className="text-black text-3xl sm:text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-gray-700 text-lg mb-6">{slide.description}</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded">Book Now</button>
              </div>
              <img
                src={slide.image}
                alt={`Ambulance Service ${index + 1}`}
                className="w-full sm:w-1/2 h-full object-cover sm:mx-4"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
