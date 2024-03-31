import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    primary: {
      500: '#E50914', // A vibrant red for important components like buttons
    },
    accent: {
      500: '#ffc107', // A gold color for highlighting and accents
    },
    darkBackground: '#141414', // A deep dark color for backgrounds
    cardBackground: '#1F1F1F', // A slightly lighter dark for card backgrounds
  },
  fonts: {
    heading: '"Playfair Display", serif', // A more dramatic font for headings
    body: '"Roboto", sans-serif', // A clean font for body text
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderRadius: 'full', // Rounded buttons
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)', // Soft shadow for depth
        transition: 'all 0.2s ease-in-out', // Smooth transition for interaction states
      },
      variants: {
        solid: (props: { colorMode: string }) => ({
          bg: props.colorMode === 'dark' ? 'primary.600' : 'primary.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'primary.500' : 'primary.600',
            transform: 'scale(1.05)', // Slightly enlarge on hover
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.25)', // Increase shadow on hover for a "lifted" effect
          },
        }),
        // Add more variants as needed
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderColor: 'gray.300', // Subtle border color
          _hover: {
            borderColor: 'gray.400', // Darker border on hover
          },
          _focus: {
            borderColor: 'primary.500', // Highlight with primary color on focus
            boxShadow: `0 0 0 1px var(--chakra-colors-primary-500)`, // Adding a glow effect on focus
          },
        },
      },
    },
  },
  styles: {
    global: (props: { colorMode: string }) => ({
      '.chakra-box': { // Targeting all Box components
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white', // Dynamic background based on color mode
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.600', // Dynamic text color
        borderRadius: 'lg', // Rounded corners for a softer, modern look
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        padding: 4, // Standard padding; adjust as needed
        _hover: {
          boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)', // Slightly larger shadow on hover for a "lifted" effect
        },
      },
      body: {
        color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.700',
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50', // Use darker backgrounds for dark mode, lighter for light mode
        lineHeight: 'base', // Ensure text readability
      },
      h1: {
        fontSize: '2xl',
        fontWeight: 'bold',
        color: props.colorMode === 'dark' ? 'primary.400' : 'primary.500', // Ensure headings stand out
      },
      // Adjust other heading sizes as needed
    }),
  },
})

export default theme
