import React, { useMemo, useState } from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  const [item,setItem] = useState(1);

  const Memo = useMemo(() => {
    console.log("multicountMemo function called");
    return count*5 ;
  },[count])

  return (
    <>
      <h1>count : {count}</h1>
      <h1>item : {item} </h1>
      <h1>function: {Memo}</h1>
      <button onClick={()=>setCount(count+1)}>count button</button>
      <button onClick={()=>setItem(item*5)}>item button</button>
    </>

  )
}

export default App