import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown and mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 w-full bg-gray-850 text-gray-200 shadow-lg z-50 border-b border-gray-850">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-3xl font-extrabold text-blue-400 hover:text-blue-500 transition duration-300 tracking-wider"
        >
          Ezekiel Owens
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link ${
                isActive ? "text-blue-500 font-bold underline" : "text-gray-300"
              } hover:text-blue-400 transition`
            }
          >
            Home
          </NavLink>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="nav-link flex items-center gap-1 text-gray-300 hover:text-blue-400 transition"
            >
              Creations
              <svg
                className={`w-4 h-4 transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } transition-transform`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute bg-gray-800 text-gray-300 shadow-md rounded-lg mt-2 py-2 w-48 border border-gray-600">
                {[
                  { path: "/masks", label: "Masks" },
                  { path: "/helmets", label: "Helmets" },
                  { path: "/sculptures", label: "Sculptures" },
                  { path: "/backdrops", label: "Backdrops" },
                ].map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-600 hover:text-white rounded-md transition"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/contact"
            className="nav-link hover:text-blue-400 transition"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-gray-900 border-t border-gray-700 animate-slide-down"
        >
          {[
            { path: "/", label: "Home" },
            { path: "/masks", label: "Masks" },
            { path: "/helmets", label: "Helmets" },
            { path: "/sculptures", label: "Sculptures" },
            { path: "/backdrops", label: "Backdrops" },
            { path: "/contact", label: "Contact" },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="block px-6 py-3 text-gray-300 hover:bg-blue-500 hover:text-white transition"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
