import React from "react"
import { Outlet, Link } from "react-router-dom"

const users = [
    {
        id: 1,
        name: "Gorka",
    },
    { id: 2, name: "Marc" },
    { id: 3, name: "Pere" },
]

const Users = () => {
    return (
        <div>
            <h1>Usuarios</h1>
            {users.map((user) => (
                <Link to={`/users/${user.name}`} key={user.id}>
                    {user.name}
                </Link>
            ))}
            <Outlet />
        </div>
    )
}

export default Users
