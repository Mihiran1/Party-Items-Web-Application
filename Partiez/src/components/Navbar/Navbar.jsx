import React, { useState, useEffect } from 'react'
import Logo from "../../assets/website/Partiez.png"
import { Link, NavLink } from "react-router-dom"
import { FaBell, FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from "../CartContext/CartContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart(); // Get cart count from context

  // Add scroll event listener to detect when to fix the navigation
  useEffect(() => {
    const handleScroll = () => {
      // Get the top navbar's height to know when to fix the main nav
      const topNavHeight = document.querySelector('.top-navbar')?.offsetHeight || 0;
      
      if (window.scrollY > topNavHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Birthday", path: "/birthday" },
    { name: "Occasion", path: "/occasion" },
    { name: "Balloons", path: "/balloons" },
    { name: "Decoration", path: "/decoration" },
    { name: "Tableware", path: "/tableware" },
    { name: "Personalised", path: "/personalised" },
  ]

  return (
    <>
      <div className="w-full">
        {/* Top Navbar with Logo, Search, and Icons */}
        <div className="top-navbar flex justify-between items-center px-3 sm:px-4 md:px-8 py-3 shadow-md bg-white">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src={Logo} alt="Parties Logo" className="w-8 sm:w-10" />
          </Link>

          {/* Search bar - hidden on smaller screens */}
          <div className="hidden sm:block flex-1 mx-2 md:mx-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search here.."
                className="w-full border border-gray-300 rounded-full py-1 sm:py-2 pl-8 sm:pl-10 pr-4 focus:outline-none text-xs sm:text-sm"
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs sm:text-sm" />
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button 
            className="md:hidden ml-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-5">
            {/* Search icon for mobile */}
            <div className="sm:hidden relative">
              <FaSearch className="text-lg sm:text-xl text-black mx-1" />
            </div>
            {/* Bell notification */}
            <div className="relative">
              <FaBell className="text-lg sm:text-xl text-black mx-0.5" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            {/* Heart/Wishlist */}
            <div className="relative">
              <FaHeart className="text-lg sm:text-xl text-black mx-0.5" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            {/* Shopping Cart - Now using context for cart count */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg sm:text-xl text-black mx-0.5" />
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        {/* Main Navigation - now with fixed positioning when scrolled */}
        <div 
          className={`w-full px-4 py-3 bg-gray-800 transition-all duration-300 z-50
            ${isMenuOpen ? 'block' : 'hidden md:block'}
            ${isScrolled ? 'fixed top-0 left-0 shadow-lg' : ''}`}
        >
          <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Navigation Links */}
            <ul className="flex flex-col md:text-xs lg:text-base md:flex-row md:items-center gap-2 md:gap-6 text-sm font-medium mx-auto">
              {navItems.map((item) => (
                <li key={item.name} className="w-full md:w-auto md:ml-2">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 md:py-0 px-2 hover:text-orange-400 ${
                        isActive ? "text-orange-500" : "text-white"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            
            {/*Buttons */}
            <div className="flex flex-col sm:flex-row md:text-xs md:gap-5 md:ml-0 ml-[40%]">
              <Link to="/login">
                <button className="bg-orange-500 text-xs lg:text-sm text-white px-3 md:mr-0 py-1 rounded-full hover:bg-orange-600 font-medium">
                  Login
                </button>
              </Link>
              <Link to="/signup"> 
                <button className="bg-orange-500 text-xs lg:text-sm text-white px-3 md:mr-0 py-1 rounded-full hover:bg-orange-600 font-medium">
                  Sign-up
                </button>
              </Link> 
            </div>
          </div>
        </div>

        {/* Add a placeholder div when main nav is fixed to prevent content jump */}
        {isScrolled && (
          <div className="main-nav-placeholder" style={{ height: '53px' }}></div>
        )}
      </div>
    </>
  )
}

export default Navbar