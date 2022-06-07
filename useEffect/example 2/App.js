import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
const [value, setValue] = useState(0);
 useEffect( () => {
   document.title = `chat (${value})`;
 })

  return(
    <div className="container">
    <h1> {value} </h1>
    <button onClick={()=>{setValue(value+1)}}>click me</button>
  </div>
  )
}

export default App;