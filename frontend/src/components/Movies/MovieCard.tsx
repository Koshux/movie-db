import { Badge, Box, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Movie } from "../../types"

const MovieCard = ({ movie }: { movie: Movie }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'white');

  return (
    <Box
      p="5"
      // maxW="320px"
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
      <Image
        src={movie.poster_path}
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
