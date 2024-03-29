import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      50: '#e5f4e3', // Light green, consider changing according to your color scheme
      100: '#c7e2c2',
      200: '#a6d09f',
      300: '#82bd79',
      400: '#5aa854',
      500: '#418f3b', // Main shade of green, adjust as necessary
      600: '#31702e',
      700: '#225220',
      800: '#123413',
      900: '#001600',
    },
    accent: {
      500: '#dcb234', // Gold color, for accents and buttons
    },
  },
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: '"Roboto", sans-serif',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      variants: {
        solid: (props: { colorMode: string }) => ({
          bg: props.colorMode === 'dark' ? 'primary.600' : 'primary.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'primary.500' : 'primary.600',
          },
        })
      }
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      body: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
      },
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: props.colorMode === 'dark' ? 'primary.300' : 'gray.500',
      },
    })
  },
})

export default theme
