import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movieService'

interface Movie {
  id: number,
  title: string,
  genre: string,
  year: string
}

const Movies = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movies = await fetchMovies()
        setMovies(movies)
      } catch (err) {
        console.error(err)
      }
    }

    getMovies()
  }, [])

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie: Movie)  => (
          <li key={movie.id}>{movie.title} - {movie.year}</li>
        ))}
      </ul>
    </div>
  )
}

export default Movies
