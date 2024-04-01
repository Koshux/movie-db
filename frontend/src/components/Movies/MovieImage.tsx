import { Box } from "@chakra-ui/react"

interface MovieImageProps {
  src: string
  title: string
}
const MovieImage = ({ src, title }: MovieImageProps) => (
  <Box
    position="relative"
    borderRadius="lg"
    overflow="hidden"
    backgroundImage={`url(${src})`}
    backgroundSize="cover"
    backgroundPosition="center"
    aria-label={`Poster of ${title}`}
    height={{
      base: '300px',

    }}
    width={{
      base: '200px',
    }}
  >
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
