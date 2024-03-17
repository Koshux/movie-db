import { configureStore } from "@reduxjs/toolkit"
import { moviesApi } from './features/movies/moviesApi'

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
