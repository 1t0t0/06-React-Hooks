import React, { useEffect, useRef } from 'react';

const App = () => {
  const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = 'green';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <input
          type="text"
          ref={inputElem}
          className="border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none"
        />
        <button
          onClick={btnClicked}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default App;
