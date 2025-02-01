import { useState } from "react"

function App() {
  const [change, setchanage] = useState('apple')
  function chnagereq() {
    setchanage('Banana')
  }
  return (
    <>
      <h1>{change}</h1>
      <button onClick={chnagereq}>click me</button>
    </>
  )
}

export default App
