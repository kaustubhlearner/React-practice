import { useEffect, useState } from "react"

const Checkbox = () => {
    const [datainfo, setdatainfo] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setdatainfo(data))
    })
    return (
        <>
            <ul>
                {datainfo.map((dtat, index) => (
                    <li key={index}>{dtat.id} | {dtat.name}</li>
                ))}
            </ul>
        </>
    )
}

export default Checkbox