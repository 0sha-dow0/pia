import { Box, Text, Link, Flex, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, DrawerCloseButton, useDisclosure, VStack, HStack, Icon } from '@chakra-ui/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box as="footer" bg="neutral.100" py={6} mt={8}
      // bg="#f0f4f8" // Light gray background
      color="#243b55" // Dark blue-gray text
      // py={4}
      // textAlign="center"
      borderTop="1px solid #CBD2D9">
        <Flex
              
          maxW="container.xl"
          mx="auto"
          px={4}
          justify="space-between"
          align="center"
          flexDirection={{ base: 'column', md: 'row' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          <Text fontSize="sm" color="neutral.600">
            © {new Date().getFullYear()} Greenify. All rights reserved.
          </Text>
          <Flex gap={4} mt={{ base: 4, md: 0 }}>
            <Link onClick={onOpen} fontSize="sm" color="brand.500" _hover={{ textDecoration: 'underline' }} cursor="pointer">
              Contact Us
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Contact Us Drawer */}
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Contact Us</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="start">
              <HStack>
                <Icon as={Mail} boxSize={6} color="brand.500" />
                <Text fontSize="md">
                  Email us at{' '}
                  <Link href="mailto:support@greenify.com" color="brand.500" _hover={{ textDecoration: 'underline' }}>
                    support@greenify.com
                  </Link>
                </Text>
              </HStack>
              <HStack>
                <Icon as={Phone} boxSize={6} color="brand.500" />
                <Text fontSize="md">
                  Call us at{' '}
                  <Link href="tel:+1234567890" color="brand.500" _hover={{ textDecoration: 'underline' }}>
                    +1 (234) 567-890
                  </Link>
                </Text>
              </HStack>
              <HStack>
                <Icon as={MapPin} boxSize={6} color="brand.500" />
                <Text fontSize="md">
                  Visit us at 123 Greenify Lane, Plant City, PC 12345
                </Text>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Footer;