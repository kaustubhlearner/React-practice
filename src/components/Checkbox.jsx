import React, { useState } from 'react'

const Checkbox = () => {
    const [gender, setgender] = useState('')
    const [city, setcity] = useState('bihar')

    return (
        <>
            <h1>handle radio button</h1>
            <input type="radio" name="gender" id="male" value={'male'} onChange={(event) => setgender(event.target.value)} />
            <label htmlFor="male">Male</label>
            <br />
            <input type="radio" name="gender" id="female" value={'female'} onChange={(event) => setgender(event.target.value)} />
            <label htmlFor="female">Female</label>
            <br />
            <h1>Your selected Gender : {gender}</h1>
            <br /><br />

            <h1>select your city </h1>
            <select defaultValue={'bihar'} onChange={(event)=>setcity(event.target.value)}>

                <option value="noida" >Noida</option>
                <option value="bihar" >bihar</option>
                <option value="delhi" >delhi</option>
                <option value="haryana" >haryana</option>
            </select>
            <h2>Selected your city: {city} </h2>
        </>
    )
}

export default Checkbox