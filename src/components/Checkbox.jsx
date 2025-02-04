import React, { useState } from 'react'

const Checkbox = ({color }) => {

    const [time, settime] = useState('')
    function updatetime() {
        let a = new Date().toLocaleTimeString()
        settime(a)
    }

    return (
        <>
            <h1 style={{color:color, backgroundColor:"black", width:"120px"}}> {time}</h1>
            <button onClick={updatetime}>check time </button>
            <br />
            <br />
            <select defaultValue={"pink"}>
                <option value="red">Red</option>
                <option value="pink">Pink</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
            </select>
        </>
    )
}

export default Checkbox