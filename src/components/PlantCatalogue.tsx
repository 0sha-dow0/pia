import { useState } from 'react';
import { Box, Container, Grid, Heading, Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import { Plant } from '../types';
import PlantCard from './PlantCard';

interface PlantCatalogueProps {
  plants: Plant[];
}

const PlantCatalogue = ({ plants }: PlantCatalogueProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    plant.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box as="section" py={12}>
      <Container maxW="container.xl">
        <Heading
          as="h1"
          fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
          mb={4}
          textAlign="center"
        >
          Our Indoor Plant Collection
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          mb={8}
          textAlign="center"
          color="neutral.600"
          maxW="2xl"
          mx="auto"
        >
          Discover our curated selection of beautiful indoor plants to bring nature into your home.
        </Text>

        <Box maxW="md" mx="auto" mb={12}>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Search color="#9E9E9E" size={20} />
            </InputLeftElement>
            <Input
              placeholder="Search plants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              borderRadius="full"
              borderColor="neutral.200"
              _focus={{ borderColor: 'brand.500', boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)' }}
            />
          </InputGroup>
        </Box>

        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(4, 1fr)',
          }}
          gap={8}
        >
          {filteredPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </Grid>

        {filteredPlants.length === 0 && (
          <Box textAlign="center" mt={12}>
            <Text fontSize="lg" color="neutral.600">
              No plants found. Try a different search term.
            </Text>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default PlantCatalogue;