import { Badge, Box, Image, Text, useColorModeValue } from "@chakra-ui/react"
import { Movie } from "../../types"
import MovieImage from "./MovieImage";
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/'
const POSTER_SIZE = 'w500'

const MovieCard = ({ movie }: { movie: Movie }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'white');
  const posterUrl = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`

  return (
    <Box
      padding="4"
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
      <MovieImage src={movie.poster_path} />
      <Image
        src={posterUrl}
        alt={`Poster of ${movie.title}`}
        borderRadius="md"
      />
      <Box>
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
            // padding="4"
            // width={{
            //   base: '100%',
            //   md: '50%',
            //   lg: '25%',
            // }}
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
          // padding="4"
          // width={{
          //   base: '100%',
          //   md: '50%',
          //   lg: '25%',
          // }}
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
