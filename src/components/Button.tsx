// import React from "react"
import { default as Angular } from "react"
import { Button as RSButton } from "reactstrap"

const Button = () => {
    const [buttonText, setButtonText] = Angular.useState("Botón")
    return <RSButton>{buttonText}</RSButton>
}

export default Button
