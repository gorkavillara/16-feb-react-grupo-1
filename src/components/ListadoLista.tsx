import React from "react"

const ListadoLista = ({ lista }: { lista: string[] }) => {
    return (
        <ul>
            {lista.map((entrada, index) => (
                <li key={index}>{entrada}</li>
            ))}
        </ul>
    )
}

export default ListadoLista
