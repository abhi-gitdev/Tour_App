import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Foot = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">TourApp</h3>
          <p className="text-gray-400">
            Explore the world’s best tours with TourApp. Our mission is to
            provide unforgettable travel experiences.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#tours" className="hover:text-indigo-500 transition">
                Tours
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-600 transform hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transform hover:scale-110 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transform hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        &copy; {new Date().getFullYear()} TourApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Foot;
