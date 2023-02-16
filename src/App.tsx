/* eslint-disable */
import React, { useState } from "react"
import CompFuncCicloVida from "./components/ciclovida/CompFuncCicloVida"
import ComponenteCicloVida from "./components/ciclovida/ComponenteCicloVida"
import ComponenteClase from "./components/ComponenteClase"
import ComponenteFuncional from "./components/ComponenteFuncional"
import Contador from "./components/contador/Contador"
import ContadorClase from "./components/contador/ContadorClase"
import CompPadre from "./components/jerarquia/CompPadre"

const miElemento = <button>Mi botón</button>

function App() {
    const [show, setShow] = useState(true)
    // Hacer cálculos, llamar a apis, utilizar hooks
    return (
        <div>
            {/* <ComponenteClase /> */}
            {/* <ComponenteFuncional /> */}
            {/* <CompPadre /> */}
            {/* <Contador initialValue={5} /> */}
            {/* <ContadorClase initialValue={5} /> */}
            {/* {show && <ComponenteCicloVida />} */}
            {show && <CompFuncCicloVida />}
            <button onClick={() => setShow((prev) => !prev)}>
                Mostrar/ocultar
            </button>
        </div>
    )
}

export default App
