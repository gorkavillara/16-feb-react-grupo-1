import React, { useState } from "react"

type TContadorProps = {
    initialValue?: number
}

const Contador = ({ initialValue }: TContadorProps) => {
    let [ valor, setValor ] = useState(initialValue || 0)
    // console.log(estado)
    // const valor = estado[0]
    // const cambioValor = estado[1]
    // let valor = initialValue || 0

    const restaValor = (cant: number = 1) => {
        setValor(
            (anteriorvalor) => anteriorvalor - cant
        )
    }

    const sumaValor = (cant: number = 1) => {
        // valor++
        // console.log(valor)
        // setValor(valor + 1)
        setValor(
            (anteriorvalor) => anteriorvalor + cant
        )
    }
    return (
        <>
            <h3>{valor}</h3>
            <div>
                <button onClick={() => restaValor(5)}>Menos 5</button>
                <button onClick={() => restaValor()}>Menos</button>
                <button onClick={() => sumaValor()}>Más</button>
                <button onClick={() => sumaValor(5)}>Más 5</button>
            </div>
        </>
    )
}

export default Contador
