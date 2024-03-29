import React, { useState } from 'react'
// import { fetchMovies } from '../services/movieService'
import Search from './Search'
import GenreFilter from './GenreFilter'
import { Movie } from '../types'
import { useGetMoviesQuery } from '../features/movies/moviesApi'
import MovieList from './MovieList'
import { Button } from '@chakra-ui/react'
import Carousel from './Carousel'
import CategoryCarousel from './Carousel'

const Movies = () => {
  const [isFiltered, setIsFiltered] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const searchCriteria = `${selectedGenre},${query}`
  const { data: movies, error, isLoading } = useGetMoviesQuery(searchCriteria)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.toString()}</div>

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre)

    setIsFiltered(genre !== 'all' || query !== '')
  }

  const handleSearch = (query: string) => {
    setQuery(query)
    setIsFiltered(query !== '' || selectedGenre !== 'all')
  }

  const categories = [
    { id: 'most-popular', name: 'Most Popular'},
    { id: 'comedy', name: 'Comedy'},
    { id: 'thriller', name: 'Thriller'},
  ]

  return (
    <div>
      <h1>Movies</h1>
      <Search onSearch={handleSearch} />
      <GenreFilter onGenreSelect={handleGenreSelect} />
      {isFiltered ? (
        <MovieList
          category={selectedGenre ? 'Filtered' : 'Search'}
          filter={searchCriteria}
          genre={selectedGenre}
        />
      ) : (
        <>
        <CategoryCarousel categoryName="Most Popular" movies={movies} />
          {/* {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleGenreSelect(category.id)}
            >
              {category.name}
            </Button>
          ))} */}
        {/* </CategoryCarousel> */}
          {/* <MovieList
            category="Most Popular"
            filter={searchCriteria}
            genre={selectedGenre}
          />
          <MovieList
            category="Comedy"
            filter={searchCriteria}
            genre={selectedGenre}
          />
          <MovieList
            category="Thriller"
            filter={searchCriteria}
            genre={selectedGenre}
          /> */}
        </>
      )}
    </div>
  )
}

export default Movies
