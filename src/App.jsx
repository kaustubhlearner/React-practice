import { useState } from "react"

function App() {
  const [name, setname] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')

  return (
    <>
      <h1>Controller component</h1>
      <form action="">
        <input type="text" onChange={(event) => setname(event.target.value)} placeholder="Enter the value" />
        <br /> <br />
        <input type="password" onChange={(event) => setpassword(event.target.value)} placeholder="Enter the password" />
        <br /> <br />
        <input type="email" onChange={(event) => setemail(event.target.value)} placeholder="Enter the email" />
        <br /> <br />
        <button>Submit</button>
        <h3>{name}</h3>
        <h3>{password}</h3>
        <h3>{email}</h3>
        <button onClick={()=>setname('')} >clear</button> 
        <button onClick={()=>setemail('')} >clearEmail</button> 
        <button onClick={()=>setpassword('')} >clearPassword</button> 
      </form>
    </>
  )
}

export default App
