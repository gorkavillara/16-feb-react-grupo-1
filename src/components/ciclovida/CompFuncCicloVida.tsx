import React, { useState, useEffect } from "react"

const CompFuncCicloVida = () => {
    const [miVariable, setMiVariable] = useState<boolean | undefined>()
    // 1 - Componente se monta
    // 2 - Componente se actualiza
    // 3 - Componente se va a desmontar
    useEffect(() => {
        console.log("Se ha ejecutado")
        return () => {
            console.log("Se va a desmontar")
        }
    }, [])
    useEffect(() => {
        if (typeof miVariable === "undefined") return
        console.log("miVariable ha cambiado")
    }, [miVariable])

    const updateVar = () => {
        setMiVariable((val) => {
            if (typeof val === "undefined") return true
            return !val
        })
    }

    return (
        <div>
            <button onClick={updateVar}>Actualiza</button>
        </div>
    )
}

export default CompFuncCicloVida
