import React, { useState } from "react"
import { IFormData } from "models"

const FormulariosClasicos = () => {
    const [nombre, setNombre] = useState("nombre")
    const [apellido, setApellido] = useState("apellido")
    const [formData, setFormData] = useState<IFormData>({
        nombre: "",
        apellido: "",
        ciudad: "",
        edad: 20,
        isDeveloper: false,
    })

    const cambiaNombre = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
        // cambiar el estado
        // setNombre(event.target.value)
        setFormData((prev) => ({ ...prev, nombre: event.target.value }))
    }

    const cambiaCampo = (event: React.ChangeEvent<HTMLInputElement>) => {
        // cambiar el estado
        // console.log(event.target.value)
        // console.log(event.target.name)
        const newVal =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        const key = event.target.name
        setFormData((prevData) => ({
            ...prevData,
            [key]: newVal,
        }))
    }

    const cambiaCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const key = event.target.name
        const newVal = event.target.checked
        setFormData((prevData) => ({ ...prevData, [key]: newVal }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("Se ha enviado el formulario")
        console.log({ formData })
        // Enviar esta información a un backend o lo que sea
    }

    return (
        <div>
            <h1>Formularios en React</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    alignItems: "center",
                }}
            >
                {/* <div> */}
                <label htmlFor="input-nombre">
                    <span>Tu nombre*</span>
                    <input
                        type="text"
                        placeholder="Escribe tu nombre"
                        id="input-nombre"
                        // defaultValue="hola mundo"
                        value={formData.nombre}
                        onChange={cambiaNombre}
                        required
                    />
                </label>
                {/* <span>{formData.nombre}</span> */}
                <input
                    type="text"
                    placeholder="Escribe tu apellido"
                    value={formData.apellido}
                    onChange={(event) =>
                        setFormData((prev) => ({
                            ...prev,
                            apellido: event.target.value,
                        }))
                    }
                />
                {/* <span>{formData.apellido}</span> */}
                <input
                    type="text"
                    placeholder="Escribe tu ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={cambiaCampo}
                    maxLength={12}
                />
                {/* <span>{formData.ciudad}</span> */}
                <input
                    type="number"
                    placeholder="Escribe tu edad"
                    name="edad"
                    value={formData.edad}
                    onChange={cambiaCampo}
                    min={5}
                    max={20}
                />

                <label htmlFor="input-developer">
                    <input
                        id="input-developer"
                        type="checkbox"
                        name="isDeveloper"
                        checked={formData.isDeveloper}
                        onChange={cambiaCampo}
                        // onChange={cambiaCheckbox}
                    />
                    <span>Eres desarrollador?</span>
                </label>
                <button
                    type="button"
                    onClick={() => console.log("He hecho clic")}
                >
                    Click
                </button>
                {/* <span>{formData.edad}</span> */}
                <button>Enviar</button>
                {/* <input type="submit" value="Enviar" /> */}
            </form>
            {/* </div> */}
        </div>
    )
}

export default FormulariosClasicos
