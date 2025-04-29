import { read, utils } from 'xlsx';
import { Plant } from '../types';

export const parseExcelFile = async (file: File): Promise<Plant[]> => {
  try {
    // Read the Excel file
    const data = await file.arrayBuffer();
    const workbook = read(data, { type: 'array' });
    
    // Get the first worksheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    
    // Convert worksheet to JSON
    const jsonData = utils.sheet_to_json<any>(worksheet);
    
    // Map the data to our Plant interface
    // Assuming Excel columns are: Name, Description, Price, ImageUrl
    const plants: Plant[] = jsonData.map((row, index) => ({
      id: (index + 1).toString(), // Generate IDs since Excel might not have them
      name: row.Name || '',
      description: row.Description || '',
      price: parseFloat(row.Price) || 0,
      imageUrl: row.ImageUrl || '',
    }));
    
    return plants;
  } catch (error) {
    console.error('Error parsing Excel file:', error);
    throw new Error('Failed to parse Excel file');
  }
};