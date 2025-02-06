import { useState } from "react"
import Checkbox from "./components/Checkbox"

function App() {

  const alertbutton = (name) => {
    alert(name)
  }

  return (
    <>

      <Checkbox  alertbutton={alertbutton}/>

    </>
  )
}

export default App
