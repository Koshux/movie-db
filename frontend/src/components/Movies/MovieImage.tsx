import { Box, Image } from "@chakra-ui/react";

const MovieImage = ({ src } : { src: string }) => (
  <Box
    position="relative"
    borderRadius="lg"
    overflow="hidden"
    padding="4"
    // width={{
    //   base: '100%',
    //   md: '50%',
    //   lg: '25%',
    // }}
  >
    <Image
      src={src}
      alt="Movie poster"
      objectFit="cover"
    />
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      bgGradient="linear(to-t, transparent, rgba(0,0,0,0.5))"
    />
  </Box>
)

export default MovieImage
