import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaAmbulance, FaHospital, FaAward } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Service = () => {
  const services = [
    {
      title: 'Emergency Ambulance',
      description: 'Swift and reliable emergency ambulance services available 24/7. Prioritizing your health and safety with our modern fleet and trained professionals.',
      icon: <FaAmbulance size={40} />,
    },
    {
      title: 'Hospital Transfers',
      description: 'Seamless hospital transfers ensuring timely and efficient transportation. Our commitment is your well-being at every step of the journey.',
      icon: <FaHospital size={40} />,
    },
    {
      title: 'Award-Winning Services',
      description: 'Recognized for excellence, our award-winning services showcase our commitment to providing outstanding emergency medical care to our community.',
      icon: <FaAward size={40} />,
    },
  ];

  return (
    <section id="services" className="bg-gray-100 mx-auto py-12 max-w-screen-xl mx-auto shadow-lg">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold inline-block pb-2 border-b-4 border-blue-500 hover:border-blue-700 transition duration-300">
            <ScrollLink to="services" smooth={true} duration={500}>
              Our Services
            </ScrollLink>
          </h2>
        </div>

        {/* Service Containers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="service-icon mb-4 item-center">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-justify text-gray-800">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
