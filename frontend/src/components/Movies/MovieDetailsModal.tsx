import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react"
import { Movie } from "../../types"

interface MovieDetailsModalProps {
  movie: Movie
  children: React.ReactNode
}

const MovieDetailsModal = ({ movie, children }: MovieDetailsModalProps) => {
  const { isOpen, onOpen, onClose }  = useDisclosure()

  return (
    <>
      <Box onClick={onOpen} cursor="pointer">
        {children}
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{movie.title}</ModalHeader>
          <ModalBody>
            <Text>Release Date: {movie.release_date}</Text>
            <Text>Rating: {movie.vote_average}</Text>
            <Text>Overview:</Text>
            <Text>{movie.overview}</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MovieDetailsModal
