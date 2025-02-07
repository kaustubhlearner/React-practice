import { useEffect, useState } from "react"

const Checkbox = () => {
    const [datainfo, setdatainfo] = useState([])

    useEffect(() => {
        const apidata = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/comments')
            const info = await response.json()
            const data = setdatainfo(info)
        }
        apidata()

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