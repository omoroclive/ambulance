import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import image1 from '../Assets/ambulance2.jpg';
import logo from '../Assets/logo.jpg';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 mx-auto py-12 shadow-lg">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold inline-block pb-2 border-b-4 border-blue-500 hover:border-blue-700 transition duration-300">
            <ScrollLink to="about" smooth={true} duration={500}>
              About Us
            </ScrollLink>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-md">
          <img src={image1} alt="Ambulance" className="w-full md:w-1/2 h-auto object-cover mb-4 md:mb-0 rounded-lg" />

          <div className="md:w-1/2 md:pl-8">
            <p className="text-xl mb-6 text-justify">
              Welcome to the Ambulance Booking System. We are dedicated to providing top-notch emergency medical services to our community. Our mission is to ensure swift and reliable transportation for those in need of urgent medical care.
            </p>
            <p className="text-xl mb-6 text-justify">
              With a fleet of modern ambulances and a team of highly professionals, we prioritize the safety and well-being of our clients. Whether it is responding to emergencies or facilitating hospital transfers, our commitment to excellence is unwavering.
            </p>

            {/* Values */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Our Values</h3>
              <ul className="list-disc pl-6">
                <li>Compassion and Care</li>
                <li>Timely and Efficient Services</li>
                <li>Professionalism</li>
                <li>Commitment to Excellence</li>
              </ul>
            </div>

            <p className="text-xl text-justify">
              Your well-being is our priority, and we strive to make a positive impact on the community we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
