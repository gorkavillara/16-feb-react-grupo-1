import React, { createContext, useReducer } from "react"
import { ContadorContextInterface, ContadorInterface, OptionalContext, actions } from "models"

export const ContadorContext = createContext<
    OptionalContext<ContadorContextInterface>
>({})

type ActionType = actions



// const actions = {
//     increment: "increment",
//     decrement: "decrement",
//     reset: "reset"
// }

const contadorInicial: ContadorInterface = {
    valor: 0
}

const contadorReducer = (state: ContadorInterface, action: { payload: any, type: ActionType }) => {
    switch (action.type) {
        case "increment":
            return { ...state, valor: state.valor + 1 }
        case "decrement":
            return { ...state, valor: state.valor - 1 }
        case "reset":
            return { ...state, valor: 0 }
    }
}

const ContadorContextProvider = ({children}: any) => {
    //@ts-ignore
    const [contador, dispatchContador] = useReducer(contadorReducer, contadorInicial)
    console.log(contador)

    const incrementaContador = () => {
        //@ts-ignore
        dispatchContador({ type: actions.increment })
    }

    return <ContadorContext.Provider value={{ valor: contador.valor, dispatchContador, incrementaContador }} children={children} />
}

export default ContadorContextProvider
