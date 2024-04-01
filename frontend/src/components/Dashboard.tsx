import { useEffect, useState } from 'react'
import Search from './Filters/Search'
import GenreFilter from './Filters/GenreFilter'
import { useGetMoviesByGenreTmdbQuery, useGetMostPopularMoviesQuery, useGetMoviesQuery } from '../features/movies/moviesApi'
import MovieCarousel from './Movies/MovieCarousel'
import MovieFilteredResults from './Movies/MovieFilteredResulst'
import { Box, Heading, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import MovieSkeleton from './Movies/MovieSkeleton'

const Dashboard = () => {
  const [isFiltered, setIsFiltered] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const searchCriteria = `${selectedGenre},${searchTerm}`
  const { data: movies, error, isLoading } = useGetMoviesQuery(searchCriteria)
  const {
    data: mostPopularMovies,
    error: mostPopularMoviesError,
    isLoading: mostPopularIsLoading,
  } = useGetMostPopularMoviesQuery()
  const {
    data: actionMovies,
    error: actionMoviesError,
    isLoading: actionMoviesIsLoading,
  } = useGetMoviesByGenreTmdbQuery('28')
  const {
    data: comedyMovies,
    error: comedyMoviesError,
    isLoading: comedyMoviesIsLoading,
  } = useGetMoviesByGenreTmdbQuery('35')

  useEffect(() => {
    setIsFiltered(selectedGenre !== 'all' || searchTerm !== '')
  }, [selectedGenre, searchTerm])

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre)
    setIsFiltered(genre !== 'all' || searchTerm !== '')
  }

  const handleSearch = (query: string) => {
    setSearchTerm(query)
    setIsFiltered(query !== '' || selectedGenre !== 'all')
  }

  if (isLoading) return <MovieSkeleton />
  if (error) return <div>Error: {error.toString()}</div>

  return (
    <div>
      <Heading as='h1' size='4xl' noOfLines={1}>Movies</Heading>
      <Search onSearch={handleSearch} isLoading={isLoading} />
      <GenreFilter
        onGenreSelect={handleGenreSelect}
        selectedGenre={selectedGenre}
      />
      {
        isFiltered
          ? (<MovieFilteredResults movies={movies} />)
          : (
            <>
              {mostPopularIsLoading ? <MovieSkeleton /> : (<MovieCarousel title='Most Popular' movies={mostPopularMovies} />)}
              {actionMoviesIsLoading ? <MovieSkeleton /> : (<MovieCarousel title='Action' movies={actionMovies} />)}
              {comedyMoviesIsLoading ? <MovieSkeleton /> :(<MovieCarousel title='Comedy' movies={comedyMovies} />)}
            </>
          )
      }
    </div>
  )
}

export default Dashboard
