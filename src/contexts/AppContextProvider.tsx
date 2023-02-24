/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable, jsx-a11y/anchor-is-valid */
import React, { createContext, useEffect, useState } from "react"
import { User, Settings, OptionalContext, Context } from "models"

export const AppContext = createContext<OptionalContext<Context>>({})

const AppContextProvider = ({ children }: any) => {
    const [settings, setSettings] = useState<Settings>({ darkMode: true })
    const [activeUser, setActiveUser] = useState<User | null>(null)

    useEffect(() => {
        if (!activeUser) return

    }, [activeUser])

    const toggleDarkMode = () => {
        setSettings((prevSettings) => ({
            ...prevSettings,
            darkMode: !prevSettings.darkMode,
        }))
    }

    return (
        <AppContext.Provider
            value={{ settings, setSettings, toggleDarkMode }}
            children={children}
        />
    )
}

export default AppContextProvider
