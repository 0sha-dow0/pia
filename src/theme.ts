import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    brand: {
      50: '#E3FDFD',
      100: '#CBF1F5',
      200: '#A6E3E9',
      300: '#71C9CE',
      400: '#45B6C1',
      500: '#008C9E', // Primary button color
      600: '#007A8A',
      700: '#005F6B',
      800: '#00434D',
      900: '#002A34',
    },
    accent: {
      50: '#FFF4E6',
      100: '#FFE8CC',
      200: '#FFD8A8',
      300: '#FFC078',
      400: '#FFA94D',
      500: '#FF922B',
      600: '#FD7E14',
      700: '#F76707',
      800: '#E8590C',
      900: '#D9480F',
    },
    neutral: {
      50: '#F8F9FA',
      100: '#F1F3F5',
      200: '#E9ECEF',
      300: '#DEE2E6',
      400: '#CED4DA',
      500: '#ADB5BD',
      600: '#868E96',
      700: '#495057',
      800: '#343A40',
      900: '#212529',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 600,
        borderRadius: 'full',
      },
      variants: {
        solid: (props: { colorScheme: string }) => ({
          bg: props.colorScheme === 'brand' ? 'brand.500' : `${props.colorScheme}.500`,
          color: 'white',
          _hover: {
            bg: props.colorScheme === 'brand' ? 'brand.600' : `${props.colorScheme}.600`,
          },
        }),
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'neutral.50',
        color: 'neutral.800',
      },
    },
  },
});

export default theme;