import React from 'react'
import Section1 from './components/section1/section1.jsx'
import Section2 from './components/section2/section2.jsx'

const App = () => {
    const users = [
      { img:'https://images.unsplash.com/photo-1665436035665-d7dad9086ee2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        into:'',
        tag:'Satisfied' 
      },
      {
        img:'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        into:'',
        tag:'Underserved'
      },
      
      {
        img:'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
        into:'',
        tag:'Underbanked'
      }  
    ]
  return (
    <div>
     <Section1 users={users} />
     <Section2 />  
    </div>
  )
}

export default App
