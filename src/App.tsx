import { useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import Header from './components/Header';
import PlantCatalogue from './components/PlantCatalogue';
import Cart from './components/Cart';
import Footer from './components/Footer'; // Import Footer
import { CartProvider } from './contexts/CartContext';
import defaultPlants from './data/plants-data';
import { Plant } from './types';

function App() {
  const [plants] = useState<Plant[]>(defaultPlants);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return (
    <CartProvider>
      <Box minH="100vh" bg="neutral.50" display="flex" flexDirection="column">
        <Header />
        <Container maxW="container.xl" py={8} flex="1">
          <PlantCatalogue plants={plants} />
        </Container>
        <Cart />
        <Footer />
      </Box>
    </CartProvider>
  );
}

export default App;