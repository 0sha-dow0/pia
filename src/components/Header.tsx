import { Box, Flex, Container, Heading, useBreakpointValue } from '@chakra-ui/react';
import { Leaf } from 'lucide-react';
import CartButton from './CartButton';

const Header = () => {
  const logoSize = useBreakpointValue({ base: 20, md: 24 });

  return (
    <Box as="header" py={4} px={4} position="sticky" top="0" zIndex="sticky" bg="white" boxShadow="sm">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={2}>
            <Leaf color="#008C9E" size={logoSize} />
            <Heading
              size={useBreakpointValue({ base: 'md', md: 'lg' })}
              fontWeight="600"
              bgGradient="linear(to-r, brand.500, brand.300)"
              bgClip="text"
            >
              Greenify
            </Heading>
          </Flex>
          <CartButton />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;