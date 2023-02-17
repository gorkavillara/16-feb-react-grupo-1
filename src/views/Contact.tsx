import React from "react"
import styles from "./Contact.module.scss"

const Contact = () => {
    return (
        <div className={styles.contacto}>
            <h1>Saludo desde contacto</h1>
            <p>Referencia para rem</p>
            <button className={styles.info}>Solicitar información</button>
        </div>
    )
}

export default Contact
