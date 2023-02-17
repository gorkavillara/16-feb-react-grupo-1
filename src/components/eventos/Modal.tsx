import React from "react"

const Modal = () => {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        console.log("Has hecho clic en el modal")
    }
    return (
        <div>
            <button onClick={handleClick}>Aceptar</button>
            <button onClick={handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal
