import React, { useReducer } from 'react'
import "./App.css"

const App = () => {

  const initialState = 5;
  const reducer = (state, action) => {
    if(action.type === "INCREMENT" ){
    return state + 1;
    }else if(action.type === "DECREMENT" ){
      return state - 1;
      }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='container'>
      <h1> {state} </h1>
      <button onClick={() => {dispatch({type:"INCREMENT"})}}>Increment</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
    </div>
  )
}

export default App