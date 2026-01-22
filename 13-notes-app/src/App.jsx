import React, { useState, useTransition } from 'react'

const App = () => {

  const [title, settitle] = useState('');
  const [detail, setDetail] = useState('');

  const [task, setTask] = useState([]);

  const submitHanddler=(e)=>{
    e.preventDefault()
    console.log(title,detail)

    const copyTask =[...task]
    copyTask.push({title,detail})
    setTask(copyTask)
    settitle('')
    setDetail('')

  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }
  

  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form onSubmit={(e)=>{
        submitHanddler(e)
      }} className='flex gap-9 lg:w-1/2 p-10 flex-col item-start'>
          
          <h1 className='text-4xl mb-2 font-bold'>ADD Notes</h1>
          
          {/*first input for heaading*/}
          <input type="text"
          placeholder="Enter notes heaading"
          className="p-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e)=>settitle(e.target.value)}
          />
        

        {/*second input for details*/}
        <textarea type="text"
          placeholder='write details here' 
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded"
          value={detail}
          onChange={(e)=>setDetail(e.target.value)}
          />
        <button className='bg-white scale-95 active:bg-gray-400 font-medium w-full outline-none text-black py-2 px-5 rounded'>ADD NOTES</button>
      
        
      </form>
      <div className='lg:w-1/2 lg:border-1-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent notes</h1>
      <div className='flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto'>
        {task.map (function(elem,idx){
            
            return <div key={idx} className=' flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black p-4 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>
            <div> 
              <h3 className='leading-tight text-xl font-bold '>{elem.title}</h3>
              <p className='mt-2 leading-tight font-xs font-semibold text-gray-600'>{elem.detail}</p>
            </div>
          
          <button onClick={() => {
            deleteNote(idx)
          }}className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>deleteNotes</button>
          </div>
          })}
      </div>
      
      </div>
    </div>
  )
}

export default App
