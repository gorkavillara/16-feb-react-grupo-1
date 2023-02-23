import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

import { IFormData, FormDataValidation } from "models"

const FormularioFormik = () => {
    return (
        <div>
            <h1>Formulario Formik</h1>
            <Formik
                initialValues={{
                    nombre: "",
                    apellido: "",
                    edad: 20,
                    isDeveloper: false,
                }}
                onSubmit={(values) => console.log({ values })}
                validate={(values) => {
                    const errors: FormDataValidation<IFormData> = {}
                    if (values.nombre.length < 5)
                        errors.nombre =
                            "El nombre debe ser superior a 5 caracteres"
                    if (values.apellido === "")
                        errors.apellido = "El apellido es obligatorio"
                    return errors
                }}
            >
                <Form
                    style={{
                        padding: "0.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        alignItems: "baseline",
                    }}
                >
                    <label
                        htmlFor="input-nombre"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "baseline",
                        }}
                    >
                        <span>Tu nombre</span>
                        <Field
                            id="input-nombre"
                            type="text"
                            name="nombre"
                            style={{ padding: "0.5rem 1rem" }}
                        />
                        <span
                            style={{
                                color: "red",
                                fontSize: "0.5rem",
                                fontWeight: 600,
                            }}
                        >
                            <ErrorMessage
                                className="error-message"
                                name="nombre"
                            />
                        </span>
                    </label>
                    <Field type="text" name="apellido" />
                    <span
                        style={{
                            color: "red",
                            fontSize: "0.5rem",
                            fontWeight: 600,
                        }}
                    >
                        <ErrorMessage
                            className="error-message"
                            name="apellido"
                        />
                    </span>
                    <Field type="number" name="edad" />
                    <Field type="checkbox" name="isDeveloper" />
                    <button type="submit">Enviar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormularioFormik
