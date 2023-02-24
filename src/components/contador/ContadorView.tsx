import React from "react"
import { RootState } from "store"
import { useSelector } from "react-redux"

const ContadorView = () => {
    const contador = useSelector<RootState, number>((state) => state.contador.valor)

    return (
        <div>
            <p>Valor: {contador}</p>
        </div>
    )
}

export default ContadorView
