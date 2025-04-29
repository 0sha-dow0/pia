import { Box, Heading, Text, VStack, Link, Icon, HStack } from '@chakra-ui/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactUs = () => {
  return (
    <Box maxW="container.md" mx="auto" py={12} px={4}>
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Contact Us
      </Heading>
      <Text fontSize="lg" color="neutral.600" mb={8} textAlign="center">
        We'd love to hear from you! Reach out to us using the details below.
      </Text>
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
    </Box>
  );
};

export default ContactUs;