import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card user='manya' age={16} img="https://images.unsplash.com/photo-1765706727299-6e2b225c7320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0Nnw2c01WalRMU2tlUXx8ZW58MHx8fHx8"/>
      <Card user="anuj" age={21} img="https://images.unsplash.com/photo-1765734208128-b3c05bc25204?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxNnw2c01WalRMU2tlUXx8ZW58MHx8fHx8"/>
      <Card user="rahul" age={23} img="https://images.unsplash.com/photo-1765706727299-6e2b225c7320?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0Nnw2c01WalRMU2tlUXx8ZW58MHx8fHx8"/>

    </div>
  )
}

export default App
