import React, { useState } from 'react'

const Checkbox = () => {
    const [gender, setgender] = useState('')
 
return (
    <>
    <h1>handle radio button</h1>
    <input type="radio" name="gender" id="male"  value={'male'} onChange={(event)=>setgender(event.target.value)}/>
    <label htmlFor="male">Male</label>
    <br />
    <input type="radio" name="gender" id="female" value={'female'} onChange={(event)=>setgender(event.target.value)}/>
    <label htmlFor="female">Female</label>
    <br />
    <h1>Your selected Gender : {gender}</h1>
    </> 
)
}

export default Checkbox