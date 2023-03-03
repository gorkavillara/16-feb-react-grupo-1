import { RouteObject } from "react-router-dom"
import { App } from "templates"
import Play from "views/Play"

const routes: RouteObject[] = [
    { path: "/", element: <App />, children: [
        { path: "", element: <h2>Home</h2> },
        { path: "play", element: <Play /> }
    ] }
]

export default routes 