import { useState, lazy, Suspense } from "react"
// import Contador from "views/Contador"
// import Lista from "views/Lista"

const Contador = lazy(() => import("views/Contador"))
const Lista = lazy(() => import("views/Lista"))

/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable, jsx-a11y/anchor-is-valid */
function App() {
    const [route, setRoute] = useState("lista")
    const cambia = () => {
        setRoute("contador")
    }
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            {route === "contador" && <Contador />}
            {route === "lista" && <Lista />}
            <button onClick={cambia}>Cambia</button>
        </Suspense>
    )
}

export default App
