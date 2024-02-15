import React from 'react';
import Hero from './Hero'; 
import About from './About';
import Service from './Service';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto sm:mx-4">
        
        <Hero />
        <About />
        <Service />
        
      </div>
    </div>
  );
};

export default Home;

