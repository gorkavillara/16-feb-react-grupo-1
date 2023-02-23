import React from "react"
import { RouteObject, useNavigate, Navigate } from "react-router-dom"
import Home from "views/Home"
import Contact from "views/Contact"
import Users from "views/Users"
import App from "App"
import UserDetails from "views/UserDetails"

const estaLogueado = () => Math.random() > 0.5
// proteger Ruta
const rutaProtegida = (element: JSX.Element): React.ReactNode => {
    if (estaLogueado()) return element
    return <Navigate to="/" />
}

// crear las rutas
const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "contact",
                element: <Contact saludo="Hola contacto" />,
            },
            {
                path: "users",
                element: rutaProtegida(<Users />),
                children: [
                    {
                        path: ":nombre",
                        element: <UserDetails />
                    }
                ]
            },
            {
                path: "manual",
                element: <h1>Manual</h1>,
            },
            { path: "*", element: <h2>404: No existe</h2> },
        ],
    },
]

export default routes
