import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">Counter App</h1>

        <h2 className="text-5xl font-semibold mb-6 text-indigo-600">{count}</h2>

        <div className="flex justify-between gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-lg transition"
          >
            Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 rounded-lg transition"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition"
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
