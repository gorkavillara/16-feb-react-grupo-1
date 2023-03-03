import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Sidebar.module.scss"

const routes = [
    { path: "/", name: "Home" },
    { path: "/play", name: "Play" },
]

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.enlacesDiv}>
            {routes.map(route => <NavLink to={route.path} key={route.path}>{route.name}</NavLink>)}
        </div>
        <div>Log out</div>
    </div>
  )
}

export default Sidebar