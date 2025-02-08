import { useState } from "react"

const Checkbox = () => {
    const [user, setuser] = useState([])
    const [users, setusers] = useState('')
    const handlevent = () => {
        setuser([...user, users])
    }
    const total = user.length
    const lastuser = user[user.length - 1]
    const unique = [...new Set(user)].length
    return (
        <>
            <h1>Total user: {total}</h1>
            <h1>Last User : {lastuser}</h1>
            <h1>unique User: {unique}</h1>
            <input onChange={(e) => setusers(e.target.value)} type="text" placeholder="add Something" />
            <button onClick={handlevent}>add user</button>
            {user.map((items, index) =>
                <h4 key={index}>{items}</h4>
            )}
        </>
    )
}

export default Checkbox