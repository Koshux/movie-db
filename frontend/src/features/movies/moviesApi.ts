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
      query: () => '/movies?include=genres'
    }),
    getMoviesByCategory: builder.query<Movie[], { category: string, filter?: string, genre?: string }>({
      query: ({ category, filter, genre }) => {
        let queryParams = `category=${category}`

        if (filter) {
          queryParams += `&filter=${filter}`
        }

        if (genre) {
          queryParams += `&genre=${genre}`
        }

        return `/movies?${queryParams}`
      },
    }),
  })
})

export const {
  useGetMoviesQuery,
  useGetMostPopularMoviesQuery,
  useGetMoviesByCategoryQuery,
} = moviesApi
