import React, { useContext } from "react"
import { AppContext } from "contexts/AppContextProvider"

const SettingsView = () => {
    const { settings, toggleDarkMode } = useContext(AppContext)

    return (
        <div className={`settings ${settings?.darkMode ? "dark" : ""}`}>
            <label htmlFor="darkmode-input">
                <input
                    id="darkmode-input"
                    type="checkbox"
                    checked={settings?.darkMode}
                    onChange={toggleDarkMode}
                />
                <span>DarkMode</span>
            </label>
        </div>
    )
}

export default SettingsView
