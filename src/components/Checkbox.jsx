import React, { useState } from 'react'

const Checkbox = () => {
    const [skills, setskills] = useState([])
    const handleskills = (event) => {
        if(event.target.checked){
            setskills([...skills,event.target.value])
        }
        else{
            setskills([...skills.filter((items)=>items!=event.target.value)])
        }

    }

return (
    <>
        <h1>Select Your Skills</h1>
        <input onChange={handleskills} type="checkbox" id="PHP" value={'PHP'} />
        <label htmlFor="PHP">Php</label>
        <input onChange={handleskills} type="checkbox" id='Javascript' value={"Javascript"} />
        <label htmlFor="Javascript">Javascript</label>
        <input onChange={handleskills} type="checkbox" id="Python" value={'Python'} />
        <label htmlFor="python">Python</label>
        <h1>{skills.toString()}</h1>
    </> 
)
}

export default Checkbox