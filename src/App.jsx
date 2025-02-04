import { useState } from "react"
import Checkbox from "./components/Checkbox"

function App() {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')

  return (
    <>
  <Checkbox/>
    </>
  )
}

export default App
