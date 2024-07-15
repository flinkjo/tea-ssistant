import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const boop: number = 1;
  console.log(boop);

  return (
    <>
      <div className="card">
        <p>State is so fun</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
      </div>
    </>
  )
}

export default App;
