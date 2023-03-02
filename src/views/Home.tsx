import { AppContext } from "contexts/AppContextProvider"
import React, { useContext } from "react"

const Home = () => {
    const { settings, activeUser } = useContext(AppContext)
    console.log({ settings, activeUser })
    return (
        <div className={`home ${settings?.darkMode ? "dark" : ""}`}>
        {/* <div> */}
            <nav className="navbar">
                <li>Home</li>
                <li>Users</li>
                <li>Login</li>
            </nav>
            <main>
                <h1>Hola mundo desde la home</h1>
            </main>
        </div>
    )
}

export default Home
