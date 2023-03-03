/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useMemo } from "react"

const obtenTexto = (val: number) => `El valor del contador es ${val.toString()}`

const Contador = () => {
    const [valor, setValor] = useState<number>(0)
    const [actualiza, setActualiza] = useState(true)

    const texto = useMemo(() => obtenTexto(valor), [valor])
    
    return (
        <div>
            <h1 aria-label="title">Valor: {valor}</h1>
            <button onClick={() => setValor(val => val - 1)}>Menos</button>
            <button onClick={() => setValor(val => val + 1)}>Más</button>
            <p>{texto}</p>
            <button onClick={() => setActualiza(prev => !prev)}>Actualiza</button>
        </div>
    )
}

export default Contador
