import React, { useState } from "react";

const Card = ({ id, image, name, info, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : info.substring(0, 200) + "...";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      <img src={image} alt={name} className="w-full h-56 object-cover" />

      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-bold text-gray-800">{name}</h4>
          <span className="text-indigo-600 font-semibold">${price}</span>
        </div>

        <p className="text-gray-600 text-sm mb-4">
          {description}
          <span
            onClick={() => setReadmore(!readmore)}
            className="text-indigo-600 font-medium cursor-pointer ml-2"
          >
            {readmore ? "show less" : "read more"}
          </span>
        </p>

        <button
          onClick={() => removeTour(id)}
          className="w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
