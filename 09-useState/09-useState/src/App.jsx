import React, { useState } from 'react'
const App = () => {
  const [num, setNum] = useState(20);
  const [userName, setUserName] = useState("Anuj");
  const increaseNum = () => {
    setNum(num + 1);
  };
  const decreaseNum = () => {
    setNum(num - 1);
  }
  const jumpByFive = () => {
    setNum(num + 5);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increaseNum}>increase</button>
      <button onClick={decreaseNum}>decrease</button>
      <button onClick={jumpByFive}>jump by 5</button>
    </div>
  )
}

export default App
