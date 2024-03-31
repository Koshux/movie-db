import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Genre } from "../../types";

export const genresApi = createApi({
  reducerPath: 'genresApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/api'
  }),
  endpoints: (builder) => ({
    getGenres: builder.query<Genre[], string | void>({
      query: () => '/genres'
    }),
  }),
})

export const {
  useGetGenresQuery
} = genresApi
