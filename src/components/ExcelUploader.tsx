import { 
  Box, 
  Button, 
  Input, 
  FormControl, 
  FormLabel, 
  useToast,
  Text
} from '@chakra-ui/react';
import { useState } from 'react';
import { Upload } from 'lucide-react';
import { parseExcelFile } from '../utils/excelParser';
import { Plant } from '../types';

interface ExcelUploaderProps {
  onDataLoaded: (plants: Plant[]) => void;
}

const ExcelUploader = ({ onDataLoaded }: ExcelUploaderProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const toast = useToast();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    
    if (!file) return;
    
    // Check if it's an Excel file
    if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
      toast({
        title: 'Invalid file format',
        description: 'Please upload an Excel file (.xlsx or .xls)',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }
    
    setFileName(file.name);
    setIsLoading(true);
    
    try {
      const plants = await parseExcelFile(file);
      onDataLoaded(plants);
      
      toast({
        title: 'Success!',
        description: `Loaded ${plants.length} plants from Excel file`,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error loading file',
        description: 'Could not parse the Excel file. Please check the format.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={4} borderWidth="1px" borderRadius="lg" borderStyle="dashed" borderColor="neutral.300">
      <FormControl>
        <FormLabel htmlFor="excel-upload" cursor="pointer" m={0}>
          <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            p={6}
          >
            <Upload size={32} color="#9E9E9E" />
            <Text fontWeight="medium" mt={2}>
              {fileName ? fileName : 'Upload product Excel file'}
            </Text>
            <Text fontSize="sm" color="neutral.500" mt={1}>
              .xlsx or .xls format with columns: Name, Description, Price, ImageUrl
            </Text>
            <Button
              mt={4}
              size="sm"
              colorScheme="brand"
              isLoading={isLoading}
              loadingText="Uploading..."
            >
              Browse Files
            </Button>
          </Box>
        </FormLabel>
        <Input
          type="file"
          id="excel-upload"
          accept=".xlsx, .xls"
          onChange={handleFileChange}
          hidden
        />
      </FormControl>
    </Box>
  );
};

export default ExcelUploader;