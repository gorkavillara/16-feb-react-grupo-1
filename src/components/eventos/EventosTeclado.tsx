import React, { useRef } from "react"

const frase = "Cambiaste un Rolex por un Casio"

const EventosTeclado = () => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleKeyDown = (event: any) => {
        // console.log(event)
        // Tendríamos que chequear la escritura
        // console.log(`Se ha escrito la letra ${event.key}`)
    }
    const handleKeyUp = (event: any) => {
        if (event.key !== "Enter") return
        console.log(event)
        // console.log(event)
        // Chequearíamos el envío
        // Si el usuario ha presionado Enter
        // Lanzamos una comprobación
        console.log("Se ha lanzado la comprobación")
        const valorInput = inputRef.current?.value
        if (valorInput === frase) {
            alert("CORRECTO!!!")
        } else {
            alert("ERRORR!!!!")
        }
        // console.log(event)

    }
    return (
        <div>
            <p>{frase}</p>
            <input ref={inputRef} type="text" onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} />
        </div>
    )
}

export default EventosTeclado
