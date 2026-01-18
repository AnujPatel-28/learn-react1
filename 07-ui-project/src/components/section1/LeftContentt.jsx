import React from 'react'
import Arrow from './Arrow.jsx'
import Herotext from './herotext';
const LeftContentt = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 ' >
      <Herotext />
      <Arrow />
    </div>
  )
}

export default LeftContentt
