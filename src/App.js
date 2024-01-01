import { useState } from "react";
import Counter from "./components/counter";
import Employee from "./components/Employee";



function App() {
   
    const [count,setCount] = useState(0);
    const addCount = () => {
      setCount(count+1);
    }

    let obj = {
      title : '1st counter',
      count,
      place:'hello'
    }

    let emp = [
      {name:'samaha',age:20},
      {name:'swalha',age:17},
      {name:'safwan',age:25}
    ]
  return (
    <div className="App">
      <button onClick={addCount}>Add</button>
       <Counter {...obj}/>
       <Counter title='2nd counter' count={count}/>
       {
        emp.map((obj,index)=>
          (
             <Employee key={index} {...obj}/>
          )
        )
       }
    </div>
    
  );
}

export default App;


