import { Badge, Box, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Movie } from "../../types"
import MovieImage from "./MovieImage";
import MovieDetailsModal from "./MovieDetailsModal";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w500'

const MovieCard = ({ movie }: { movie: Movie }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'white');
  const posterUrl = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`

  return (
    <Box
      w="200px"
      h="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      color={textColor}
      boxShadow="base"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "lg",
      }}
    >
      <MovieDetailsModal movie={movie}>
        <MovieImage src={posterUrl} title={movie.title} />
      </MovieDetailsModal>
    </Box>
  )
}

export default MovieCard
