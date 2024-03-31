import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Movie } from "../../types"
import MovieCard from "./MovieCard"

const MovieFilteredResults = ({ movies }: { movies: Movie[]}) => {
  return (
    <>
      <Text fontSize="lg" mb={4}>Found {movies.length} results</Text>
      <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={1}>
        {movies.map((movie: Movie) => (
          <Box
            key={movie.id}
            // display="inline-block"
            // minWidth="220px"
            mr="0.5"
            // padding="4"
            // width={{
            //   base: '100%',
            //   md: '50%',
            //   lg: '25%',
            // }}
          >
            <MovieCard key={movie.id} movie={movie} />
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}

export default MovieFilteredResults
