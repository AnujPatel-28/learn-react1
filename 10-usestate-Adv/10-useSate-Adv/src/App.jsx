import React, { useState } from 'react'

const App = () => {

  /*const [num, setNum] = useState({user:'Anuj', age:21});
  const btnClick = () => {
    const newNum = {...num};
    newNum.user = "Kumar"; 
    newNum.age = 22; 
    setNum(newNum);

    to use- {user.num} and {age.num}
  }*/
 
  /*const [num, setNum] = useState([10,20,30]);
  const btnClick = () => {
    const newNum = [...num];
    newNum.push(40);
    setNum(newNum);
  } another way see down */
  /*const [num, setNum] = useState({user:'Anuj', age:21});
  const btnClick = () => {
    setNum(prev=>({...prev,age:50}));

  } can access by {num.user} and {num.age}*/

  const [num, setNum] = useState(10);
  const btnClick = () => {
    setNum(prev=>prev+1);
    setNum(prev=>prev+1);
    setNum(prev=>prev+1);
    // it will add 3 to previous value.. its also called batch update

  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnClick}>click me</button>
    </div>
  )
}

export default App
