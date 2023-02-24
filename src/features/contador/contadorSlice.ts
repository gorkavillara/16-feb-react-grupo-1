import { createSlice, SliceCaseReducers, PayloadAction } from "@reduxjs/toolkit"

interface ContadorState {
    valor: number
}

interface ContadorReducers extends SliceCaseReducers<ContadorState> {
    incrementa: (state: ContadorState, action: PayloadAction<number>) => void,
    decrementa: (state: ContadorState, action: PayloadAction<number>) => void,
}

const contadorSlice = createSlice<ContadorState, ContadorReducers>({
    name: "contador",
    initialState: {
        valor: 12,
    },
    reducers: {
        incrementa(state: ContadorState, action: PayloadAction<number>) {
            // Hará lo que tenga que hacer
            console.log(action.type)
            state.valor += action.payload
        },
        decrementa(state: ContadorState, action: PayloadAction<number>) {
            // Hará lo que tenga que hacer
            state.valor -= action.payload
        },
    },
})

const { incrementa, decrementa } = contadorSlice.actions

export { incrementa, decrementa }

export default contadorSlice.reducer
