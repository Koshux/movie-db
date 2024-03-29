import { Badge, Box, Image, Text } from "@chakra-ui/react"
import { Movie } from "../types"

const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <Box
      bg="gray.700"
      borderRadius="md"
      boxShadow="md"
      p={3}
      w="200px"
    >
      <Image
        // src={movie.poster}
        alt={`Poster of ${movie.title}`}
        borderRadius="md"
        // h="200px"
        // w="full"
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            ml="2"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {movie.title}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          Rating: {movie.vote_average} / 10
        </Box>

        <Text mt={2} fontSize="sm">
          {movie.overview.length > 150
            ? `${movie.overview.substring(0, 147)}...`
            : movie.overview}
        </Text>
      </Box>
      <Text isTruncated>{movie.title}</Text>
    </Box>
  )
}

export default MovieCard
