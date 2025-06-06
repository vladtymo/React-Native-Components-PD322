import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './slices/menuSlice'
// ...

export const store = configureStore({
    reducer: {
        menu: menuSlice
        // others reducers...
    },
})

// export const setupStore = (preloadedState?: Partial<RootState>) => {
//     return configureStore({
//         reducer: menuSlice,
//         preloadedState
//     })
// }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch