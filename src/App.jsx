import React, { useState } from "react";
import Tours from "./pages/Tours.jsx";
import data from "./data.js";

function App() {
  const [tours, setTour] = useState(data);

  if (tours.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">No Tours Left</h2>
        <button
          className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          onClick={() => setTour(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTour(newTours);
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
