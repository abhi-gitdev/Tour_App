import React from "react";
import Card from "./Card.jsx";

const Tours = ({ tours, removeTour }) => {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 capitalize">
          Plan With Love
        </h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
