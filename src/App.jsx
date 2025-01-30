import { useState } from "react"

function App() {
  const [data, setdata] = useState(true)

  function Change() {
    setdata(!data)
  }
  return (
    <>
      <p>{data ? "vikash" : "amit"}</p>
      <button onClick={Change}>Change</button>
    </>
  )
}

export default App
