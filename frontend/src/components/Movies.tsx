import React, { useState } from 'react'
// import { fetchMovies } from '../services/movieService'
import Search from './Search'
import GenreFilter from './GenreFilter'
import { Movie } from '../types'
import { useGetMoviesQuery } from '../features/movies/moviesApi'

const Movies = () => {
  // const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const searchCriteria = `${selectedGenre},${query}`
  const { data: movies, error, isLoading } = useGetMoviesQuery(searchCriteria)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.toString()}</div>

  return (
    <div>
      <h1>Movies</h1>
      <Search onSearch={setQuery} />
      <GenreFilter onGenreSelect={setSelectedGenre} />

      <ul>
        {movies?.map((movie: Movie)  => (
          <li key={movie.id}>
            {movie.attributes.title} - {movie.attributes.year}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
