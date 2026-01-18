import React from 'react'
import { MoveRight } from 'lucide-react';

const RightCardContent = (props) => {
  return (
    <div>
      <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className="bg-white text-xl font-bold rounded-full h-12 w-12 flex justify-center items-center">{props.id + 1}</h2>
            <div>
            <p className='text-xl leading-relexed text-white mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className='flex justify-between'>
                 <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full'>{props.tag}</button>
                 <button className='bg-blue-600 text-white font-medium px-3 py-3 rounded-full'><MoveRight size={15} /></button>
              </div>
            </div>
        </div>   
    </div>
  )
}

export default RightCardContent
