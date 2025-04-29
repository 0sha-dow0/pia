import { Button, Box, Circle } from '@chakra-ui/react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const CartButton = () => {
  const { totalItems, openCart } = useCart();

  return (
    <Box position="relative">
      <Button
        onClick={openCart}
        colorScheme="brand"
        variant="ghost"
        size="md"
        rightIcon={<ShoppingCart size={20} />}
        _hover={{ bg: 'brand.50' }}
      >
        Cart
      </Button>
      
      {totalItems > 0 && (
        <Circle
          size="20px"
          bg="accent.500"
          color="white"
          fontSize="xs"
          fontWeight="bold"
          position="absolute"
          top="-5px"
          right="-5px"
        >
          {totalItems}
        </Circle>
      )}
    </Box>
  );
};

export default CartButton;