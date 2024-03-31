import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react"

const MovieSkeleton = () => {
  return (
    <Box
      padding='4'
      boxShadow='lg'
      bg='white'
      width={{
        base: '100%',
        md: '50%',
        lg: '25%',
      }}
    >
      <SkeletonCircle size='10' />
      <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
    </Box>
  )
}

export default MovieSkeleton
