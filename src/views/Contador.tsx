import React from "react"
import ContadorControls from "components/contador/ContadorControls"
import ContadorView from "components/contador/ContadorView"

const Contador = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <ContadorView />
            <ContadorControls />
        </div>
    )
}

export default Contador
