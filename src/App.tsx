/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable */
import "./App.css"
import { Home, Contact, Admin, Login, Tareas } from "views"

const routes = {
    home: <Home />,
    contact: <Contact />,
    admin: <Admin />,
    login: <Login />,
}

function App() {
    let currentRoute: string

    // return routes[currentRoute]

    // switch (currentRoute) {
    //     case "home": return <Home />
    //     case "contact": return <Contact />
    //     case "admin": return <Admin />
    //     case "login": return <Login />
    // }

    // if (currentRoute === "home") return <Home />
    // if (currentRoute === "contact") return <Contact />
    // if (currentRoute === "admin") return <Admin />
    // if (currentRoute === "login") return <Login />
    currentRoute = "tareas"
    const mostrar = true
    return (
        <>
            {mostrar && (
                <div>
                    {currentRoute === "home" && <Home />}
                    {currentRoute === "contact" && <Contact />}
                    {currentRoute === "admin" && <Admin />}
                    {currentRoute === "login" && <Login />}
                    {currentRoute === "tareas" && <Tareas />}
                    {/* {currentRoute === "home"
                ? "Hola mundo desde home"
                : "No estoy en la home"} */}
                </div>
            )}
        </>
    )
}

export default App
