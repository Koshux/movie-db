import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Movie } from '../../types'

export const moviesApi: any = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api'
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<Movie[], string | void>({
      query: (searchCriteria = '') => {
        const params = new URLSearchParams()
        const criteria = searchCriteria || ''
        const [genreId, searchTerm] = criteria.split(',')

        if (genreId && genreId !== 'all') {
          params.append('genre', genreId)
        }
        if (searchTerm) {
          params.append('search', searchTerm)
        }

        const queryString = params.toString()
        return `/movies?${queryString ? `${queryString}` : ''}`
      },
    }),
    getMostPopularMovies: builder.query<Movie[], void>({
      query: () => '/movies?sort=popularity.desc&limit=10'
    }),
    getMoviesByGenre: builder.query<Movie[], string | void>({
      query: (genreId = '') => {
        return `/movies?genre=${genreId}&limit=10`
      },
    }),
  })
})

export const {
  useGetMoviesQuery,
  useGetMostPopularMoviesQuery,
  useGetMoviesByGenreQuery,
} = moviesApi
