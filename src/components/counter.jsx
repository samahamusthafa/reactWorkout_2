import React, { useEffect, useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
        console.log("mounting....");
        console.log("updating...."+count);
        
       
    },[count,count2])
    
  return (
    
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>Hello I am Component {count}</h1>

      <button onClick={()=>setCount2(count2+1)}>Increment</button>
      <h1>Hello I am Component {count2}</h1>
    </div>
  )
}

export default Counter
