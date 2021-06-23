import React ,{useState} from 'react'

import Student from './Student'
function App() {
  const[name,setName]=useState("amit")
  return (
    <div className="app">
    <h1>props in React:)</h1>
     <Student name={"amit"}/>
     <button onClick={()=>setName("kaushik")}>update Name</button>
     </div>
  );
  }

export default App;
