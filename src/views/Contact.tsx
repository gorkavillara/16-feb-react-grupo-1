import React from "react"

import { useLocation, useSearchParams } from "react-router-dom"

const getUrlParamsObject = (
    urlParams: URLSearchParams
): { nombre: string | null } => {
    const obj = {
        nombre: urlParams.get("nombre"),
    }
    return obj
}

const Contact = ({ saludo }: { saludo: string }) => {
    const [searchParams, setSearchParams] = useSearchParams()
    // const location = useLocation()
    // console.log(location)
    // const queryData = new URLSearchParams(location.search)
    console.log(searchParams.get("nombre"))
    const { nombre } = getUrlParamsObject(searchParams)
    return (
        <div>
            <h1>{saludo}</h1>
            <p>Nombre: {nombre}</p>
        </div>
    )
}

export default Contact
