import { useState } from "react"
import Checkbox from "./components/Checkbox"

function App() {
  const [color, setcolor]= useState('green')
  return (
    <>
  <Checkbox  color={color}/>
    </>
  )
}

export default App
