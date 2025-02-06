
const Checkbox = ({alertbutton}) => {
    const name = "akhilesh"
    return (
        <>
     <button onClick={()=>alertbutton(name)}>Alert</button>
        </>
    )
}

export default Checkbox