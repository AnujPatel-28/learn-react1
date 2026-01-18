import React from 'react'

/*const App = () => {
  function btnClicked() {
    console.log('Button clicked!')
  }
function inputChanging(val) {
    console.log(val);
  }
 const pageScroll = (elem) => { 
  if(elem>0){
    console.log('scrolling down');
  } else {
    console.log('scrolling up');
  }
  }*/
 function btnClick(){
  console.log('button clicked');
}


  return (
    <div>
     {/*<button onClick={btnClicked}>Change user</button>
      <button onClick={() => console.log('Explore button clicked!')}>explore this</button>
      <input onChange={function(elem){
         inputChanging(elem.target.value)
      }} type='text'placeholder='enter name'/>

      <div onMouseMove={(elem) => {
          console.log('elem.clientX:', elem.clientX, 'elem.clientY:', elem.clientY);
        }
      } className='box'>
      </div>
      <div onWheel={(elem) => {
         
          pageScroll(elem.deltaY);

       } } className='page'>
      <div className='Page1'></div>
      <div className='Page2'></div>
      <div className='Page3'></div>
      </div> */}

      <button onClick={btnClick}>click me</button>

    
    </div>
    
  )


export default App
