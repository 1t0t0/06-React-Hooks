import React, { useEffect, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Ttoto Phandolack")

  useEffect(() => {

    setTimeout(() => {
      setCount(count => count + 1)
    }, 2000)

  }, [count, name])



  return (

    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold">I've rendered {count} times</h1>
      </div>
    </div>


  )
};

export default App;
