import React, { useState } from "react"
import "./Login.scss"

const Login = () => {
    const [correcto, setCorrecto] = useState(true)
    return (
        <div>
            <p
                style={{
                    color: correcto ? "blue" : "red",
                    fontSize: "1.2rem",
                }}
            >
                Bienvenido
            </p>
            <button
                className={`btn ${correcto ? "correcto" : "incorrecto"}`}
                onClick={() => setCorrecto((prev) => !prev)}
            >
                {correcto ? "Correcto" : "Incorrecto"}
            </button>
        </div>
    )
}

export default Login
