import React from "react"
import Modal from "./Modal"

const EventosRaton = () => {
    return (
        <div>
            <div onMouseEnter={() => console.log("el ratón ha entrado")}>
                haz un hover
            </div>
            <div onDoubleClick={() => console.log("has hecho dobleclick")}>
                dobleclick
            </div>
            <div onDragStart={(e) => console.log("Has empezado el drag", e)}>
                drag
            </div>
            <div
                style={{
                    backgroundColor: "#123456",
                    color: "white",
                    padding: "1rem 0.5rem",
                }}
                onClick={() => console.log("Has hecho clic en el div")}
            >
                <Modal />
            </div>
        </div>
    )
}

export default EventosRaton
