import { Box, Flex, Heading, IconButton, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { motion } from 'framer-motion'
import { Movie } from "../types";
import MovieCard from "./MovieCard";

const CategoryCarousel = ({ categoryName, movies }: { categoryName: string, movies: Movie[] }) => {
// const Carousel = ({ children }: { children: React.ReactNode }) => {
  // const [slideIndex, setSlideIndex] = useState(0);
  // const slidesToShow = useBreakpointValue({ base: 1, md: 3 }) || 3;
  // const slideWidth = 100 / slidesToShow;

  // const handleNext = () => {
  //   setSlideIndex((prev) => (prev + 1) % React.Children.count(children));
  // }

  // const handlePrev = () => {
  //   setSlideIndex((prev) => (
  //     prev - 1 + React.Children.count(children)
  //   ) % React.Children.count(children)
  //   );
  // }
  const MotionBox = motion(Box)

  return (
    <Box my={5}>
      <Heading size="md" mb={3}>{categoryName}</Heading>
      <MotionBox display="flex" overflow="scroll">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MotionBox>
    </Box>
    // <Flex alignItems="center">
    //   <IconButton
    //     aria-label="Previous slide"
    //     icon={<FaArrowAltCircleLeft />}
    //     onClick={handlePrev}
    //   />
    //   <Flex overflow="hidden" w="full">
    //     <motion.div
    //       initial={false}
    //       animate={{ marginLeft: `${-slideIndex * slideWidth}%` }}
    //       transition={{ type: 'tween' }}
    //       style={{ display: 'flex', width: '100%' }}
    //     >
    //       {React.Children.map(children, (child) => (
    //         <Box flex="none" width={`${slideWidth}`}>{child}</Box>
    //       ))}
    //     </motion.div>
    //   </Flex>
    //   <IconButton
    //     aria-label="Next slide"
    //     icon={<FaArrowAltCircleRight />}
    //     onClick={handleNext}
    //   />
    // </Flex>
  )
}

export default CategoryCarousel
