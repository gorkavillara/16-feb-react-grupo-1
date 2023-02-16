import React, { useState } from "react"
import BotonesContador from "./BotonesContador"

import DisplayContador from "./DisplayContador"

type TContadorProps = {
    initialValue?: number
}

const Contador = ({ initialValue }: TContadorProps) => {
    const [valor, setValor] = useState(initialValue || 0)

    const restaValor = (cant: number = 1) => {
        setValor((anteriorvalor) => anteriorvalor - cant)
    }

    const sumaValor = (cant: number = 1) => {
        setValor((anteriorvalor) => anteriorvalor + cant)
    }
    return (
        <>
            <DisplayContador valor={valor} />
            <BotonesContador restaValor={restaValor} sumaValor={sumaValor} />
        </>
    )
}

export default Contador
