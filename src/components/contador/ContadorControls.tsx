import React from "react"
import { useDispatch } from "react-redux"

import { incrementa, decrementa } from "features/contador/contadorSlice"


const ContadorControls = () => {

    const dispatch = useDispatch()

    const menos = (val: number = 1) => {
        dispatch(decrementa(val))
    }
    const mas = (val: number = 1) => {
        dispatch(incrementa(val))
    }
    return (
        <div>
            <button onClick={() => menos(2)}>Menos 2</button>
            <button onClick={() => menos()}>Menos</button>
            <button onClick={() => mas()}>Más</button>
            <button onClick={() => mas(2)}>Más 2</button>
        </div>
    )
}

export default ContadorControls
