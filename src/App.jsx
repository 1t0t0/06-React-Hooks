import React, { useState } from 'react';

const App = () => {

  // const [car, setCar] = useState({
  //   brand: "Ferrari",
  //   model: "Roma",
  //   year: "2023",
  //   color: "red"
  // })
  // // const [model, setModel] = useState('Roma')
  // // const [year, setYear] = useState('2024')
  // // const [color, setColor] = useState('red')

  // const changeColor = () => {
  //   setCar((prev) => {
  //     return { ...prev, color: "blue" }
  //   })
  // }
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }


  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Count: {count}</h1>
        <button onClick={increaseCount} type="button" class="mt-5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Increase by 4</button>
      </div>
    </div>
  );
};

export default App;
