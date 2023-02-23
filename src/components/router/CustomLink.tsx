import React from "react"
import { Link, useLocation } from "react-router-dom"
// import styles from "modulo"

const CustomLink = ({ to }: { to: string }) => {
    const location = useLocation()

    return (
        <Link
            to={to}
            // className={location.pathname.includes(to) && styles.activeLink}
        >
            CustomLink
        </Link>
    )
}

export default CustomLink
