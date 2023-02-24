import React from "react"
import ReactDOM from "react-dom/client"

import "./index.css"
import App from "App"


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

// englobar toda nuestra App con este router
root.render(
    <App />
)
