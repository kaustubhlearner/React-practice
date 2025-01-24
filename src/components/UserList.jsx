
const UserList = () => {

    const users = [
        { id: 1, Name: "Alice", age: 25 },
        { id: 2, Name: "Bob", age: 30 },
        { id: 3, Name: "Charlie", age: 32 },
    ]
    return (
        <>
            {
                users.map((users) => (
                    <div key={users.id}>
                        <p>{users.Name}</p>
                        <p>{users.age}</p>

                    </div>
                ))
            }
        </>
    )

}

export default UserList