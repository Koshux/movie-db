import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { Movie } from "../types"

const FilteredSearchResults = ({ movies }: { movies: Movie[]}) => {
  return (
    <>
      <Text fontSize="lg" mb={4}>Found {movies.length} results</Text>
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
        {movies.map((movie: Movie) => (
          <Box
            key={movie.id}
            p={5}
            shadow="md"
            borderWidth="1px"
          >
            <Text mt={2}>
              {movie.title}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </>
  )
}
