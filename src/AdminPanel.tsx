import { useState } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import ExcelUploader from './components/ExcelUploader';
import { Plant } from './types';

interface AdminPanelProps {
  onDataLoaded: (plants: Plant[]) => void;
}

const AdminPanel = ({ onDataLoaded }: AdminPanelProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" py={12} px={4}>
      <Container maxW="container.md">
        <Heading as="h2" size="xl" mb={4} textAlign="center">
          Admin Panel
        </Heading>
        
        <Text mb={8} textAlign="center" color="neutral.600">
          Upload your product catalog Excel file to update the plant listing
        </Text>
        
        <Button onClick={onOpen} colorScheme="brand" size="lg" width="full">
          Upload Product Catalog
        </Button>
        
        <Modal isOpen={isOpen} onClose={onClose} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload Product Catalog</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <ExcelUploader onDataLoaded={(plants) => {
                onDataLoaded(plants);
                onClose();
              }} />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  );
};

export default AdminPanel;