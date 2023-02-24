/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable, jsx-a11y/anchor-is-valid */
import { useState } from "react"
import { Outlet, Link, NavLink, useNavigate } from "react-router-dom"

import "./App.scss"

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const navigate = useNavigate()
    const goToUsers = () => {
        navigate("/users")
    }
    return (
        <>
            <nav className="navbar">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                {loggedIn && (
                    <li>
                        <NavLink to="/users">Users</NavLink>
                    </li>
                )}
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/rmApi">Rick and Morty</NavLink>
                </li>
            </nav>
            <Outlet />
        </>
    )
}

export default App
