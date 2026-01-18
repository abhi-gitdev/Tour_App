import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-r from-indigo-100 to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-indigo-700 mb-4 animate-pulse">
          About TourApp
        </h2>
        <div className="w-28 h-1 bg-indigo-600 mx-auto mb-12 rounded-full"></div>
        <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">
          TourApp is your gateway to discovering amazing tours worldwide. Plan
          your adventures, explore destinations, and manage your trips with
          ease.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-indigo-600">
              User Friendly
            </h3>
            <p className="text-gray-600">
              Intuitive UI that makes exploring tours effortless.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-indigo-600">
              Responsive
            </h3>
            <p className="text-gray-600">
              Works perfectly on all devices, from mobiles to desktops.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <h3 className="text-xl font-bold mb-3 text-indigo-600">
              Modern Tech
            </h3>
            <p className="text-gray-600">
              Built with React, Vite, and Tailwind CSS for fast performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
