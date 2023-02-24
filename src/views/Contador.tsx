import { ContadorContext } from "contexts/ContadorContextProvider"
import React, { useContext } from "react"
import { actions } from "models"

const Contador = () => {
    const { valor, dispatchContador, incrementaContador } = useContext(ContadorContext)
    return (
        <div>
            <p>Valor: {valor}</p>
            <button
                onClick={() =>
                    dispatchContador &&
                    actions &&
                    dispatchContador({ type: actions.increment })
                }
            >
                Más
            </button>
            <button onClick={incrementaContador}>
                Incrementa
            </button>
        </div>
    )
}

export default Contador
