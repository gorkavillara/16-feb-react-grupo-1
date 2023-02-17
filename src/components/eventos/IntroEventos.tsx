import React, { useRef, useEffect } from "react"

const IntroEventos = () => {
    // Generar la referencia
    const auxButtonRef = useRef<HTMLButtonElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        // añadir el event listener
        const element = auxButtonRef.current
        element?.addEventListener("click", () =>
            console.log("Has hecho clic en el botón auxiliar")
        )
        return () =>
            element?.removeEventListener("click", () => {})
    }, [])

    const logInputValue = () => {
        const valor = inputRef.current?.value
        console.log(valor)
    }

    return (
        <div>
            <button onClick={() => console.log("Has hecho clic")}>Clic</button>
            <button ref={auxButtonRef} id="boton-aux">
                Otro botón
            </button>
            <input type="text" ref={inputRef} />
            <button onClick={logInputValue}>Enviar</button>
        </div>
    )
}

export default IntroEventos
