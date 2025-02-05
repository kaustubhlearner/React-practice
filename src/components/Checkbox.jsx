import { useRef } from "react"

const Checkbox = () => {
const about = useRef(null)
const inputhandler = () =>{
    about.current.focus()
    about.current.style.color="red"
    
}
    return (
        <>
        <h1>handle use Ref</h1>
        <input ref={about} type="text" placeholder="enter the name " />
        <button onClick={inputhandler}>focus mode</button>
        </>
    )
}

export default Checkbox