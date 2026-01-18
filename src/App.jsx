import React, { useState } from "react";
import Nav from "./pages/Nav.jsx";
import Foot from "./pages/Foot.jsx";
import Tours from "./pages/Tours.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import data from "./data.js";

function App() {
  const [tours, setTour] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTour(newTours);
  }

  return (
    <div className="bg-gray-50 font-sans text-gray-800">
      <Nav />

      <main className="pt-24">
        {tours.length === 0 ? (
          <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-600 animate-pulse">
              Oops! No Tours Left
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Looks like you’ve explored all our tours! Click refresh to see
              them again.
            </p>
            <button
              className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => setTour(data)}
            >
              Refresh Tours
            </button>
          </div>
        ) : (
          <>
            <Tours tours={tours} removeTour={removeTour} />
            <About />
            <Contact />
          </>
        )}
      </main>

      <Foot />
    </div>
  );
}

export default App;
