import { configureStore } from "@reduxjs/toolkit"
import contadorSlice from "features/contador/contadorSlice"

const store = configureStore({
    reducer: {
        contador: contadorSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store