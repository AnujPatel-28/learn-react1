import React from 'react'
import LeftContentt from './LeftContentt'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  '>
      <LeftContentt />
      <RightContent users={props.users} />
      
    </div>
  )
}

export default Page1Content
 