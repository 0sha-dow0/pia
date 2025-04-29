import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  VStack,
  Text,
  Box,
  Divider,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import CartItem from './CartItem';
import { formatWhatsAppLink, formatWhatsAppMessage } from '../utils/whatsapp';

const Cart = () => {
  const { 
    cartItems, 
    totalPrice, 
    isCartOpen, 
    closeCart,
    clearCart
  } = useCart();
  
  const toast = useToast();

  const handleCheckout = () => {
    // Generate WhatsApp message and link
    const message = formatWhatsAppMessage(cartItems, totalPrice);
    const whatsappLink = formatWhatsAppLink(cartItems, totalPrice);
    
    // Log the message and WhatsApp link being sent
    console.log('Checkout Message:', message);
    console.log('WhatsApp Link:', whatsappLink);

    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
    
    toast({
      title: 'Order Sent',
      description: 'Your order details have been sent to WhatsApp.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    
    // Close cart drawer and clear cart
    closeCart();
    clearCart();
  };

  return (
    <Drawer
      isOpen={isCartOpen}
      placement="right"
      onClose={closeCart}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" gap={2}>
            <ShoppingBag size={20} />
            <Text>Your Shopping Cart</Text>
          </Flex>
        </DrawerHeader>

        <DrawerBody>
          {cartItems.length === 0 ? (
            <Box 
              height="100%" 
              display="flex" 
              alignItems="center" 
              justifyContent="center"
              flexDirection="column"
              textAlign="center"
              color="neutral.500"
            >
              <ShoppingBag size={64} strokeWidth={1} />
              <Text mt={4} fontSize="lg">Your cart is empty</Text>
              <Text fontSize="sm" mt={2}>
                Add some beautiful plants to your cart
              </Text>
              <Button 
                mt={6} 
                colorScheme="brand" 
                variant="outline" 
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </Box>
          ) : (
            <VStack spacing={4} align="stretch" divider={<Divider />}>
              {cartItems.map((item) => (
                <CartItem key={item.plant.id} item={item} />
              ))}
            </VStack>
          )}
        </DrawerBody>

        {cartItems.length > 0 && (
          <DrawerFooter borderTopWidth="1px" flexDirection="column" gap={4}>
            <Flex width="100%" justify="space-between" fontSize="lg">
              <Text fontWeight="500">Total:</Text>
              <Text fontWeight="700" color="brand.700">${totalPrice.toFixed(2)}</Text>
            </Flex>
            
            <Button 
              colorScheme="brand" 
              width="100%" 
              size="lg"
              onClick={handleCheckout}
              rightIcon={<ArrowRight size={18} />}
            >
              Checkout via WhatsApp
            </Button>
            
            <Button 
              variant="ghost" 
              width="100%" 
              onClick={closeCart}
            >
              Continue Shopping
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default Cart;