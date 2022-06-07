import React, { useRef } from 'react'

const App = () => {
  
  // it is like a usestate only and its preserve the value. No Re-render.
  // syntax
  // const ref = useRef(initial value);
  const value = useRef(null);
  
  const submitted = (event) => {
    event.preventDefault();
    // console.log(value);
    // console.log(value.current);
    console.log(value.current.value);  // this is the value typed in input field.
  }

  return (
    <div>
      <form action="" onSubmit={submitted}>
        <div>
          <label htmlFor="luckyName">enter your lucky name</label> <br />
          <input type="text" name="" id="luckyName" ref={value}/> <br />
          <button type='submit'>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default App