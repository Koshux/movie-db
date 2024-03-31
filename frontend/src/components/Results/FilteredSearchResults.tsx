import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Movie } from "../../types"
import MovieCard from "../Movies/MovieCard"

const FilteredSearchResults = ({ movies }: { movies: Movie[]}) => {
  return (
    <>
      <Text fontSize="lg" mb={4}>Found {movies.length} results</Text>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={1}>
        {movies.map((movie: Movie) => (
          <Box
            key={movie.id}
            // display="inline-block"
            // minWidth="220px"
            mr="0.5"
          >
            <MovieCard key={movie.id} movie={movie} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}

export default FilteredSearchResults
