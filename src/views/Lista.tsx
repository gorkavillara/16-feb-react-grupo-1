import React, { useState } from "react"
import FormularioLista from "components/FormularioLista"
import ListadoLista from "components/ListadoLista"
import Footer from "components/Footer"
import Saludo from "components/Saludo"

const Lista = () => {
    const [lista, setLista] = useState(["Sacar al perro"])
    const [objeto, setObjeto] = useState({ valor: "Hola mundo 2" })
    const textoFooter = "Soy el footer 2"
    // const addToList = (newEntry: string) => setLista(prev => [...prev, newEntry])

    return (
        <div>
            <FormularioLista setLista={setLista} />
            <ListadoLista lista={lista} />
            <Saludo />
            <Footer texto={textoFooter} objeto={objeto} />
        </div>
    )
}

export default Lista
