import React from 'react'

const App = () => {

  const user = {
    username: 'anuj',
    age: 22,
    city: 'Modasa'
  }

  localStorage.setItem('user', JSON.stringify(user))
  const usera = JSON.parse(localStorage.getItem('user'))
  console.log(usera)
  
  return (
    <div>
      
      <h1>app</h1>
    </div>
  )
}

export default App
