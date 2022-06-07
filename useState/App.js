import React, { useState } from "react";

const App = () => {

  const [name, setName] = useState("prallad");
  const handleChange = () => {
    setName("prallad pal");
  }
  return(
    <>
    <h1> {name} </h1>
    <button onClick={handleChange}>click me</button>
  </>
  )
}

export default App;