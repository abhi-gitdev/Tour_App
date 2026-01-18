import React from "react";
import Card from "./Card.jsx";

const Tours = ({ tours, removeTour }) => {
  return (
    <section id="tours" className="py-24 max-w-6xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
          Plan With Love
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our hand-picked tours and find your next adventure. Simple,
          easy, and fun!
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <Card key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
