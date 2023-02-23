import React from "react"
import { useParams } from "react-router-dom"

const UserDetails = () => {
    const { nombre } = useParams()
    return <div>Nombre: {nombre}</div>
}

export default UserDetails
