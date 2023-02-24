import React, { Dispatch, SetStateAction } from "react"

export enum actions { increment = "increment", decrement = "decrement", reset = "reset" }

export interface User {
    username: string
    role: string
}

export interface Settings {
    darkMode: boolean
}

export interface Context {
    settings: Settings
    activeUser: User | null
    setSettings: Dispatch<SetStateAction<Settings>>
    toggleDarkMode: () => void
}

export interface ContadorContextInterface {
    valor: number
    dispatchContador: React.Dispatch<any>
    incrementaContador: any
}

export type OptionalContext<T> = {
    [Prop in keyof T]?: T[Prop]
}

export interface ContadorInterface {
    valor: number
}