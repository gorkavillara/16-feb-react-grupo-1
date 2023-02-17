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

        // Iniciamos el cronómetro
        console.time("Mi contador") 

        for (let i = 0; i < 5; i++) {
            console.log(i * 5)
        }

        const alumnos = [
            { nombre: "Gorka", edad: 22, nota: 9 },
            { nombre: "Roberto", edad: 24, nota: 9.5 },
            { nombre: "Aitor", edad: 21, nota: 8.5 },
            { nombre: "Borja", edad: 29, nota: 10 },
            { nombre: "Oscar", edad: 26, nota: 8.1 },
        ]
        console.table(alumnos)

        console.log({ alumnos })

        console.error("Ha ocurrido un error")
        console.warn("Ha ocurrido un warning")
        console.info("Ha ocurrido algo FYI")

        setMiVariable((val) => {
            if (typeof val === "undefined") return true
            return !val
        })

        console.assert(alumnos.length === 0, "La función no ha limpiado los alumnos")

        console.timeEnd("Mi contador")
    }

    return (
        <div>
            <button onClick={updateVar}>Actualiza</button>
        </div>
    )
}

export default CompFuncCicloVida
