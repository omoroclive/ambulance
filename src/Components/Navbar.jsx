import React, { useState } from 'react';
import logo from '../Assets/logo.jpg';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    // Close the menu when a link is clicked
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className={`bg-blue-500 p-4 sticky top-0 z-50 ${menuOpen ? 'text-black' : ''}`}>
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className={`md:hidden bg-blue-500 ${menuOpen ? 'block' : 'hidden'} absolute w-1/2 top-16 right-0 z-40 rounded`}
            >
              {/* Render mobile links here */}
              <div className="flex flex-col items-center">
                <NavLink to="/ambulance" mobile>
                  Ambulance
                </NavLink>
                <NavLink to="/booked-ambulance" mobile>
                  Booked Ambulance
                </NavLink>
                <NavLink to="/nearby-hospital" mobile>
                  Nearby Hospital
                </NavLink>
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={500}
                  className="block text-white py-2 hover:text-gray-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  Services
                </ScrollLink>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="block text-white py-2 hover:text-gray-300 cursor-pointer"
                  onClick={handleLinkClick}
                >
                  About
                </ScrollLink>
                <div className="group relative">
                  <NavLink to="/account" className="flex items-center" mobile>
                    <span className={`text-${menuOpen ? 'white' : 'white'}`}>Account</span>
                    <FaCaretDown className={`text-${menuOpen ? 'black' : 'white'} ml-1`} />
                  </NavLink>
                  <div
                    className={`hidden group-hover:block absolute ${menuOpen ? 'bg-blue-100' : 'bg-blue-300'} mt-2 p-2 rounded-md shadow-md`}
                  >
                    {/* Mobile dropdown content goes here */}
                    <Link
                      to="/profile"
                      className={`block text-gray-800 hover:${menuOpen ? 'bg-gray-300' : 'bg-gray-400'} p-2 transition duration-300`}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className={`block text-gray-800 hover:${menuOpen ? 'bg-gray-300' : 'bg-gray-400'} p-2 transition duration-300`}
                    >
                      Settings
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Ambulance Logo" className="w-10 h-10 mx-auto" />
              <span className={`text-white text-lg font-bold ml-2 ${menuOpen ? 'text-blue-500' : ''}`}>Ambulance</span>
            </Link>
          </div>
          <div className="md:flex space-x-4 hidden">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              Home
            </ScrollLink>
            <NavLink to="/ambulance">Ambulance</NavLink>
            <NavLink to="/booked-ambulance">Booked Ambulance</NavLink>
            <NavLink to="/nearby-hospital">Nearby Hospital</NavLink>
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              Services
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 cursor-pointer"
              onClick={handleLinkClick}
            >
              About
            </ScrollLink>
            <div className="group relative">
              <NavLink to="/account" className="flex items-center flex-col">
                <span className="text-white">Account</span>
                <FaCaretDown className={`text-white ml-1`} />
              </NavLink>
              <div
                className={`hidden group-hover:block absolute ${menuOpen ? 'bg-white' : 'bg-gray-200'} mt-2 p-2 rounded-md shadow-md`}
              >
                {/* Dropdown content goes here */}
                <Link
                  to="/profile"
                  className={`block text-gray-800 hover:${menuOpen ? 'bg-gray-100' : 'bg-gray-300'} p-2 transition duration-300`}
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className={`block text-gray-800 hover:${menuOpen ? 'bg-gray-100' : 'bg-gray-300'} p-2 transition duration-300`}
                >
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            {menuOpen ? (
              <button className="text-red-500 text-2xl cursor-pointer" onClick={toggleMenu}>
                <FaTimes />
              </button>
            ) : (
              <button className="text-white text-2xl cursor-pointer" onClick={toggleMenu}>
                <FaBars />
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ to, children, mobile }) => (
  <Link
    to={to}
    className={`text-${mobile ? 'white' : 'white'} ${
      mobile
        ? 'block py-2 hover:bg-gray-300 w-full text-center justify-center transition duration-300'
        : 'hover:text-gray-300'
    }`}
  >
    {children}
  </Link>
);

export default Navbar;
