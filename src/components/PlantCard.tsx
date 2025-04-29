import { Box, Image, Heading, Text, Button, VStack, Badge, HStack, IconButton } from '@chakra-ui/react';
import { Plant } from '../types';
import { ShoppingCart, Minus, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard = ({ plant }: PlantCardProps) => {
  const { cartItems, addToCart, increaseQuantity, decreaseQuantity } = useCart();

  // Find the current quantity of the plant in the cart
  const cartItem = cartItems.find((item) => item.plant.id === plant.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    if (quantity === 0) {
      addToCart(plant);
    } else {
      increaseQuantity(plant.id);
    }
  };

  const handleIncrease = () => {
    increaseQuantity(plant.id);
  };

  const handleDecrease = () => {
    decreaseQuantity(plant.id);
  };

  return (
    <Box
      borderWidth="1px"
      borderColor="neutral.200"
      borderRadius="lg"
      overflow="hidden"
      position="relative"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      }}
    >
      <Box position="relative" height="240px" overflow="hidden">
        {/* Price Tag */}
        <Badge
          position="absolute"
          top={2}
          right={2}
          bg="white"
          color="neutral.800"
          fontSize="sm"
          px={3}
          py={1}
          borderRadius="full"
          boxShadow="md"
          fontWeight="500"
          zIndex={2}
          pointerEvents="none"
        >
          ${plant.price}
        </Badge>

        {/* Plant Image */}
        <Image
          src={plant.imageUrl}
          alt={plant.name}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="transform 0.5s"
          _hover={{ transform: 'scale(1.05)' }}
        />
      </Box>

      <VStack spacing={3} p={4} align="start">
        <Heading as="h3" size="md" fontWeight="600">
          {plant.name}
        </Heading>

        <Text color="neutral.600" noOfLines={2}>
          {plant.description}
        </Text>
      </VStack>

      {/* Add to Cart Button or Quantity Counter */}
      <Box px={4} pb={4} width="100%">
        {quantity === 0 ? (
          <Button
            onClick={handleAddToCart}
            rightIcon={<ShoppingCart size={16} />}
            bg="purple.400"
            color="white"
            _hover={{ bg: 'purple.500' }}
            size="md"
            borderRadius="md"
            width="100%"
          >
            Add to Cart
          </Button>
        ) : (
          <HStack justify="space-between" width="100%">
            <IconButton
              aria-label="Decrease quantity"
              icon={<Minus />}
              onClick={handleDecrease}
              bg="purple.400"
              color="white"
              _hover={{ bg: 'purple.500' }}
              size="sm"
              borderRadius="md"
            />
            <Text fontWeight="600" fontSize="lg" color="neutral.800">
              {quantity}
            </Text>
            <IconButton
              aria-label="Increase quantity"
              icon={<Plus />}
              onClick={handleIncrease}
              bg="purple.400"
              color="white"
              _hover={{ bg: 'purple.500' }}
              size="sm"
              borderRadius="md"
            />
          </HStack>
        )}
      </Box>
    </Box>
  );
};

export default PlantCard;