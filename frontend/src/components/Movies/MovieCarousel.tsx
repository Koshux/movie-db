import { Box, Heading, IconButton } from "@chakra-ui/react";
import { motion } from 'framer-motion'
import { Movie } from "../../types";
import MovieCard from "./MovieCard";
import { useRef } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const MovieCarousel = ({ categoryName, movies }: { categoryName: string, movies: Movie[] }) => {
  const MotionBox = motion(Box)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = container.offsetWidth / 2
      const newScrollPosition = direction === 'right'
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount

      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Box my={5} position="relative">
      <Heading size="md" mb={3}>{categoryName}</Heading>
      <IconButton
        aria-label="Scroll left"
        icon={<FaArrowAltCircleLeft />}
        position="absolute"
        left="0"
        zIndex="2"
        top="50%"
        transform="translateY(-2.5%)"
        onClick={() => scroll('left')}
      />
      <MotionBox
        display="flex"
        overflowX="scroll"
        maxW="100vw"
        ref={scrollContainerRef}
      >
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
      </MotionBox>
      <IconButton
        aria-label="Scroll right"
        icon={<FaArrowAltCircleRight />}
        position="absolute"
        right="0"
        zIndex="2"
        top="50%"
        transform="translateY(-2.5%)"
        onClick={() => scroll('right')}
      />
    </Box>
  )
}

export default MovieCarousel
