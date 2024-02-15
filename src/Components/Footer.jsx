import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.jpg';
import github from '../Assets/github.png';
import twitter from '../Assets/twitter.png';
import facebook from '../Assets/facebook.jpeg';
import linkedin from '../Assets/linkedin.png';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function Footer() {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        {/* Logo */}
        <img src={logo} alt="Ambulance Logo" className="w-16 h-16 mb-4" />

        {/* Contact Information */}
        <div className="mb-4 text-center">
          <p>
            <FaPhone className="inline mr-2" /> Phone: 0748064530 | <FaWhatsapp className="inline mr-2" /> WhatsApp: 0779090549
          </p>
          <p>
            <FaEnvelope className="inline mr-2" /> Email: charlesjecton10@gmail.com
          </p>
          <p>Location: Nairobi, Kenya - 00100</p>
        </div>

        {/* Navigation Links */}
        <div className="flex mb-4">
          <Link to="#" className="mx-2 hover:underline">Home</Link>
          <Link to="#" className="mx-2 hover:underline">Ambulance</Link>
          <Link to="#" className="mx-2 hover:underline">Booked Ambulances</Link>
          <Link to="#" className="mx-2 hover:underline">Nearby Hospitals</Link>
          <Link to="#" className="mx-2 hover:underline">Services</Link>
          <ScrollLink to="about" smooth={true} duration={500} className="mx-2 hover:underline cursor-pointer">About</ScrollLink>
        </div>

        {/* Social Media Links */}
        <div className="flex mb-4">
          <a href="https://www.facebook.com/charlesjecton" target="_blank" rel="noopener noreferrer" className="text-lg mr-2 hover:underline">
            <img src={facebook} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://twitter.com/charlesjecton" target="_blank" rel="noopener noreferrer" className="text-lg mr-2 hover:underline">
            <img src={twitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/charlesjecton" target="_blank" rel="noopener noreferrer" className="text-lg mr-2 hover:underline">
            <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="https://github.com/Charlesjeckton" target="_blank" rel="noopener noreferrer" className="text-lg hover:underline">
            <img src={github} alt="GitHub" className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p>&copy; Jecton {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
