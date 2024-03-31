import { configureStore } from "@reduxjs/toolkit"
import { moviesApi } from './features/movies/moviesApi'
import { genresApi } from "./features/genres/genresApi"

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [genresApi.reducerPath]: genresApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(moviesApi.middleware)
    .concat(genresApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
