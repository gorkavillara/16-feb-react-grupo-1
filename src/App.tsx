/* eslint-disable @typescript-eslint/no-unused-vars, no-unreachable, jsx-a11y/anchor-is-valid */
import Home from "views/Home"

import "./App.scss"
import SettingsView from "views/SettingsView"
import AppContextProvider from "contexts/AppContextProvider"
import ContadorContextProvider from "contexts/ContadorContextProvider"
import Contador from "views/Contador"

function App() {
    return (
        <AppContextProvider>
            <Home />
            <SettingsView />
            <ContadorContextProvider>
                <Contador />
            </ContadorContextProvider>
        </AppContextProvider>
    )
}

export default App
