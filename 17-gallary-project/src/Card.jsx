import React from 'react'

const Card = ({ elem }) => {
  return (
    <div className='bg-zinc-800 p-2 rounded w-60'>
      <div className='w-full h-40 bg-zinc-700 rounded overflow-hidden mb-2'>
        <img className='w-full h-full object-cover' src={elem.download_url} alt={elem.author} />
      </div>
      <h4 className='font-semibold text-sm'>{elem.author}</h4>
    </div>
  )
}

export default Card