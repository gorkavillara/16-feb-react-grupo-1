/* eslint-disable @typescript-eslint/no-unused-vars */
import HijoCallback from "components/HijoCallback"
import React, { useState, useMemo, useCallback } from "react"

const obtenTexto = (valor: number) => {
    for (let i = 0; i < 100000000; i++) {
        let a = 0
    }
    return `El valor del contador es ${valor}`
}

const addNewUserToDatabase = async () => {
    const newUser = {}
    // const res = await axios.post("https://rickmortyapi.com/addUser")
}


const Contador = () => {
    const [valor, setValor] = useState<number>(0)
    const [actualiza, setActualiza] = useState(true)
    
    const miPromesa = () => new Promise(() => console.log("He terminado"))
    const llamarAMiPromesa = useCallback(() => miPromesa(), [])

    const obtenTextoCallback = useCallback(() => obtenTexto(valor), [valor])

    // const texto = useMemo(() => obtenTexto(valor), [valor])
    const texto = obtenTextoCallback()
    
    return (
        <div>
            <h1>Valor: {valor}</h1>
            <button onClick={() => setValor(val => val - 1)}>Menos</button>
            <button onClick={() => setValor(val => val + 1)}>Más</button>
            <p>{texto}</p>
            <button onClick={() => setActualiza(prev => !prev)}>Actualiza</button>
            <HijoCallback promesa={llamarAMiPromesa} />
        </div>
    )
}

export default Contador
