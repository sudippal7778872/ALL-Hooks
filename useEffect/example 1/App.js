import React, { useEffect, useState } from "react";

const App = () => {

 useEffect( () => {
   console.log("use effect") // automatically call during render
 })

  return(
    <>
    <h1> use effect </h1>
    <button >click me</button>
  </>
  )
}

export default App;