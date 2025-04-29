import { Flex, Image, Text, IconButton, Box, HStack, Button } from '@chakra-ui/react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProps) => {
  const { plant, quantity } = item;
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();

  return (
    <Flex py={2} align="center" justify="space-between">
      <Flex gap={4}>
        <Image
          src={plant.imageUrl}
          alt={plant.name}
          boxSize="70px"
          objectFit="cover"
          borderRadius="md"
        />
        
        <Box>
          <Text fontWeight="500">{plant.name}</Text>
          <Text fontSize="sm" color="neutral.600" noOfLines={1}>
            {plant.description}
          </Text>
          <Text fontWeight="600" color="brand.600" mt={1}>
            ${plant.price}
          </Text>
        </Box>
      </Flex>
      
      <Box>
        <HStack mb={2}>
          <IconButton
            aria-label="Decrease quantity"
            icon={<Minus size={16} />}
            size="xs"
            variant="outline"
            onClick={() => decreaseQuantity(plant.id)}
            isDisabled={quantity <= 1}
          />
          
          <Text fontWeight="500" minW="20px" textAlign="center">
            {quantity}
          </Text>
          
          <IconButton
            aria-label="Increase quantity"
            icon={<Plus size={16} />}
            size="xs"
            variant="outline"
            onClick={() => increaseQuantity(plant.id)}
          />
        </HStack>
        
        <Button
          size="xs"
          variant="ghost"
          colorScheme="red"
          leftIcon={<Trash2 size={14} />}
          onClick={() => removeFromCart(plant.id)}
        >
          Remove
        </Button>
      </Box>
    </Flex>
  );
};

export default CartItem;