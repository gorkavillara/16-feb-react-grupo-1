import React, { useState } from "react"

const FormularioLista = ({
    setLista,
}: {
    setLista: React.Dispatch<React.SetStateAction<string[]>>
}) => {
    const [newEntry, setNewEntry] = useState("")
    const addNewEntry = () => {
        if (newEntry === "") return
        
        setLista(prev => [...prev, newEntry])
        setNewEntry("")
    }
    return (
        <div>
            <input
                type="text"
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
            />
            <button onClick={addNewEntry}>Añadir</button>
        </div>
    )
}

export default FormularioLista
