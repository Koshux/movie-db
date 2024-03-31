import { useState } from 'react'
import Search from './Filters/Search'
import GenreFilter from './Filters/GenreFilter'
import { useGetMoviesQuery } from '../features/movies/moviesApi'
import MovieCarousel from './Movies/MovieCarousel'
import FilteredSearchResults from './Results/FilteredSearchResults'
import { Box, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Movies = () => {
  const [isFiltered, setIsFiltered] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('')
  const searchCriteria = `${selectedGenre},${query}`
  const { data: movies, error, isLoading } = useGetMoviesQuery(searchCriteria)

  if (isLoading) {
    return (
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    )
  }

  if (error) {
    return <div>Error: {error.toString()}</div>
  }

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre)
    setIsFiltered(genre !== 'all' || query !== '')
  }

  const handleSearch = (query: string) => {
    setQuery(query)
    setIsFiltered(query !== '' || selectedGenre !== 'all')
  }

  // const categories = [
  //   { id: 'most-popular', name: 'Most Popular'},
  //   { id: 'comedy', name: 'Comedy'},
  //   { id: 'thriller', name: 'Thriller'},
  // ]

  return (
    <div>
      <h1>Movies</h1>
      <Search onSearch={handleSearch} isLoading={isLoading} />
      <GenreFilter
        onGenreSelect={handleGenreSelect}
        selectedGenre={selectedGenre}
      />
      {
        isFiltered
          ? (<FilteredSearchResults movies={movies} />)
          : (<MovieCarousel categoryName="Most Popular" movies={movies} />)
      }
    </div>
  )
}

export default Movies
