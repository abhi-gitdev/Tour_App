import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#tours" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl md:text-3xl font-extrabold text-indigo-600 tracking-wide hover:scale-105 transition-transform cursor-pointer">
            TourApp
          </div>

          <div className="hidden md:flex space-x-8 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 hover:scale-105 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-6 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
