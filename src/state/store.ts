import {configureStore} from '@reduxjs/toolkit'
import accessTokenReducer from './auth/authSlice'
export const mainStore = configureStore({
    reducer:{accessTokenReducer}
})

export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch