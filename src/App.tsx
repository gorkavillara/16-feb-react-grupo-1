/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable, jsx-a11y/anchor-is-valid */
import { useState } from "react"
import Contador from "views/Contador"

import "./App.scss"

function App() {
    const [miEstado, setMiEstado] = useState("hola mundo")
    return (
        <>
            <Contador />
        </>
    )
}

export default App
