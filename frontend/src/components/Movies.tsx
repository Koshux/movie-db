import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movieService'
import Search from './Search'
import GenreFilter from './GenreFilter'

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
  const [selectedGenre, setSelectedGenre] = useState<string>('')

  // fetch the movies when the genre and the query changes together as well as separate
  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchMovies(selectedGenre, query)
      setMovies(fetchedMovies)
    }

    loadMovies()
  }, [selectedGenre, query])



  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchMovies(selectedGenre)
      setMovies(fetchedMovies)
    }

    loadMovies()
  }, [selectedGenre])

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
      <GenreFilter onGenreSelect={setSelectedGenre} />

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
