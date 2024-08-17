import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useAuth } from './AuthContext'; 
import CreateEvent from './CreateEvent';
import logo from './event-nexus-high-resolution-logo.png'



const Navbar = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);

  // Handle logout functionality
  const handleLogout = () => {
    setIsAuthenticated(false);
    // Optionally, clear any additional authentication-related state or tokens here
  };

  return (
    <nav className="bg-pink-500 dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src={logo} alt="Event Nexus Logo" style={{ height: '50px', width: 'auto', borderRadius: '20px' }} />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => setIsCreateEventOpen(true)}
            className="mx-3 text-pink-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-pink-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:text-white"
          >
            Create Event
          </button>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="text-pink-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-pink-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:text-white"
            >
              Logout
            </button>
          ) : (
            <NavLink
              to="/signin"
              className="text-pink-700 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-pink-300 font-bold rounded-lg text-sm px-4 py-2 text-center dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:text-white"
            >
              Login
            </NavLink>
          )}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-pink-500 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="group relative">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 transition-transform transform hover:scale-110 ${
                    isActive
                      ? 'text-black bg-pink-700 md:bg-transparent'
                      : 'text-white hover:bg-pink-600 md:hover:bg-transparent'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="group relative">
              <NavLink
                to="/vendors"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 transition-transform transform hover:scale-110 ${
                    isActive
                      ? 'text-black bg-pink-700 md:bg-transparent'
                      : 'text-white hover:bg-pink-600 md:hover:bg-transparent'
                  }`
                }
              >
                Vendors
              </NavLink>
            </li>
            <li className="group relative">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 transition-transform transform hover:scale-110 ${
                    isActive
                      ? 'text-black bg-pink-700 md:bg-transparent'
                      : 'text-white hover:bg-pink-600 md:hover:bg-transparent'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="group relative">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 transition-transform transform hover:scale-110 ${
                    isActive
                      ? 'text-black bg-pink-700 md:bg-transparent'
                      : 'text-white hover:bg-pink-600 md:hover:bg-transparent'
                  }`
                }
              >
                Events
              </NavLink>
            </li>
            <li className="group relative">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 transition-transform transform hover:scale-110 ${
                    isActive
                      ? 'text-black bg-pink-700 md:bg-transparent'
                      : 'text-white hover:bg-pink-600 md:hover:bg-transparent'
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li className="group relative">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 transition-transform transform hover:scale-110 ${
                    isActive
                      ? 'text-black bg-pink-700 md:bg-transparent'
                      : 'text-white hover:bg-pink-600 md:hover:bg-transparent'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <CreateEvent open={isCreateEventOpen} onClose={() => setIsCreateEventOpen(false)} />
    </nav>
  );
};

export default Navbar;