import React, { useState, useRef } from "react"
import { Tarea } from "models"

const listaTareas: Tarea[] = [
    { id: 1, texto: "Sacar la basura", completado: false, deleted: false },
    { id: 2, texto: "Hacer la compra", completado: false, deleted: false },
    { id: 3, texto: "Sacar al perro", completado: true, deleted: false },
]

const Tareas = () => {
    const [tareas, setTareas] = useState(listaTareas)
    const inputRef = useRef<HTMLInputElement>(null)

    const nuevaTarea = () => {
        const textoNuevaTarea = inputRef.current?.value
        if (!textoNuevaTarea || textoNuevaTarea === "") return

        setTareas((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                completado: false,
                texto: textoNuevaTarea,
                deleted: false,
            },
        ])
        // if (!inputRef.current) return
        inputRef.current.value = ""
    }

    const completaTarea = (id: number) => {
        setTareas((tareas) =>
            tareas.map((tarea) =>
                tarea.id === id
                    ? { ...tarea, completado: !tarea.completado }
                    : tarea
            )
        )
    }

    const eliminarTarea = (id: number) => {
        setTareas((tareas) =>
            tareas.map((tarea) =>
                tarea.id === id ? { ...tarea, deleted: true } : tarea
            )
        )
    }
    return (
        <>
            <input ref={inputRef} type="text" />
            <button onClick={nuevaTarea}>Añadir</button>
            <ul>
                {tareas
                    .filter((tarea) => !tarea.deleted)
                    .map((tarea) => (
                        <li key={tarea.id}>
                            <span
                                style={{
                                    textDecoration: tarea.completado
                                        ? "line-through"
                                        : "",
                                    marginRight: "0.5rem",
                                }}
                            >
                                {tarea.texto}
                            </span>
                            <button onClick={() => completaTarea(tarea.id)}>
                                {tarea.completado ? "Desmarcar" : "Completar"}
                            </button>
                            <button onClick={() => eliminarTarea(tarea.id)}>
                                Eliminar
                            </button>
                        </li>
                    ))}
            </ul>
        </>
    )
}

export default Tareas
