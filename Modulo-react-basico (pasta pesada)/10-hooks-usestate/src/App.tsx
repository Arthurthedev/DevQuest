import { useState } from "react";
import './App.css'
import { MyInput } from "./components/MyInput";

function App() {
  const [count, setCount] = useState(0)

  const increment = ()=>{
    //setCount(count + 1)
    setCount(prev => prev + 1)
  }

  const decrement = ()=>{
    //setCount(count - 1)
    setCount(prev => prev - 1)
  }

  const reset = ()=>{
    setCount(0)
  }

  return (
    <>
      <button onClick={increment}>
        Incrementar contador: {count}
      </button>
      <br/><br/>
      <button onClick={decrement}>
        Decrementar contador
      </button>
      <button onClick={reset}>
        Resetar contador 
      </button>
      <br/><br/>
      <MyInput></MyInput>
    </>
  )
}

export default App
