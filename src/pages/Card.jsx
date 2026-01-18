import React, { useState } from "react";

const Card = ({ id, image, name, info, price, removeTour }) => {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : info.substring(0, 150) + "...";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <span className="text-indigo-600 font-semibold">${price}</span>
        </div>
        <p className="text-gray-600 mb-4 text-sm">
          {description}{" "}
          <span
            onClick={() => setReadmore(!readmore)}
            className="text-indigo-500 cursor-pointer hover:underline"
          >
            {readmore ? " show less" : " read more"}
          </span>
        </p>
        <button
          onClick={() => removeTour(id)}
          className="w-full py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-red-200 transition-colors duration-300 font-medium"
        >
          Not Interested
        </button>
      </div>
    </div>
  );
};

export default Card;
