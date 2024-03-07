import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movieService'
import Search from './Search'

export interface Movie {
  id: number,
  attributes: {
    title: string,
    genre: string,
    year: string
  }
}

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchMovies(query)
      setMovies(fetchedMovies)
    }

    loadMovies()
  }, [query])

  return (
    <div>
      <h1>Movies</h1>
      <Search onSearch={setQuery} />

      <ul>
        {movies.map((movie: Movie)  => (
          <li key={movie.id}>
            {movie.attributes.title} - {movie.attributes.year}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
