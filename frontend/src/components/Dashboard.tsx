import { useEffect, useState } from 'react'
import Search from './Filters/Search'
import GenreFilter from './Filters/GenreFilter'
import { useGetMoviesQuery } from '../features/movies/moviesApi'
import MovieCarousel from './Movies/MovieCarousel'
import MovieFilteredResults from './Movies/MovieFilteredResulst'
import { Box, Heading, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Dashboard = () => {
  const [isFiltered, setIsFiltered] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')
  const searchCriteria = `${selectedGenre},${searchTerm}`
  const { data: movies, error, isLoading } = useGetMoviesQuery(searchCriteria)

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

  if (isLoading) {
    return (
      <Box
        padding='4'
        boxShadow='lg'
        bg='white'
        width={{
          base: '100%',
          md: '50%',
          lg: '25%',
        }}
      >
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    )
  }

  if (error) {
    return <div>Error: {error.toString()}</div>
  }

  // const categories = [
  //   { id: 'most-popular', name: 'Most Popular'},
  //   { id: 'comedy', name: 'Comedy'},
  //   { id: 'thriller', name: 'Thriller'},
  // ]

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
          : (<MovieCarousel categoryName="Most Popular" movies={movies} />)
      }
    </div>
  )
}

export default Dashboard
