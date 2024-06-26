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
      query: () => '/movies/popular',
      transformResponse: (response: { results: Movie[] }) => response.results
    }),
    getMoviesByGenre: builder.query<Movie[], string | void>({
      query: (genreId = '') => {
        return `/movies?genre=${genreId}&limit=10`
      },
    }),
    getMoviesByGenreTmdb: builder.query<Movie[], string | void>({
      query: (genreId = '') => {
        return `/movies/genre/${genreId}`
      },
      transformResponse: (response: { results: Movie[] }) => response.results
    }),
  })
})

export const {
  useGetMoviesQuery,
  useGetMostPopularMoviesQuery,
  useGetMoviesByGenreQuery,
  useGetMoviesByGenreTmdbQuery,
} = moviesApi
