import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie, Genre } from '../../types'

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string | void>({
      query: (genre) => '/movies',
    }),
    getGenres: builder.query<Genre[], void>({
      query: () => '/movies/genres'
    }),
  }),
})

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
} = moviesApi
