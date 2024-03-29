import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
// import GenreProvider from './context/GenreContext'
import Movies from './components/Movies'
import theme from './theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Movies />
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App
