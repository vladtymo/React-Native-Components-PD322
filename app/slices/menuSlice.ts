import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

// Define a type for the slice state
interface MenuState {
    title: string | null,
    nitifications: number
}

// Define the initial state using that type
const initialState: MenuState = {
    title: null,
    nitifications: 0
}

export const menuSlice = createSlice({
    name: 'menu',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        // Pure functions
        // Use the PayloadAction type to declare the contents of `action.payload`
        setTitle: (state, action: PayloadAction<string | null>) => {
            state.title = action.payload
        },
        // logout: (state) => {
        //     state.email = null;
        //     state.isAuth = false;
        // }
    },
    selectors: {
        selectTitle: x => x.title,
        selectNotifications: x => x.nitifications
    }
})

export const { setTitle } = menuSlice.actions
export const { selectTitle, selectNotifications } = menuSlice.selectors

export default menuSlice.reducer