import { Box, ChakraProvider, IconButton, useColorMode } from '@chakra-ui/react'
import './App.css'
// import GenreProvider from './context/GenreContext'
import Movies from './components/Movies'
import theme from './theme'
import { FaMoon, FaSun } from 'react-icons/fa'

function App() {
  const ThemeToggleButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
      <IconButton
        aria-label="Toggle theme"
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
      />
    )
  }
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box ml="5" mr="5">
            <ThemeToggleButton />
            <Movies />
          </Box>
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App
