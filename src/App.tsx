import { useState, lazy, Suspense } from "react"
// import Contador from "views/Contador"
// import Lista from "views/Lista"

const Contador = lazy(() => import("views/Contador"))
const Lista = lazy(() => import("views/Lista"))
const PokeList = lazy(() => import("views/PokeList"))

/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable, jsx-a11y/anchor-is-valid */
function App() {
    const [route, setRoute] = useState("contador")
    const cambia = () => {
        setRoute("contador")
    }

    const entorno = process.env.NODE_ENV
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            {/* <div>
                <h1>{process.env.REACT_APP_NAME}</h1>
            </div>
            {route === "contador" && <Contador />}
            {route === "lista" && <Lista />}
            <button onClick={cambia}>Cambia</button>
            <div>Entorno: {entorno}</div> */}
            <PokeList />
        </Suspense>
    )
}

export default App
