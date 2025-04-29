import { CartItem } from '../types';

// Format the WhatsApp message with order details
export const formatWhatsAppMessage = (items: CartItem[], totalPrice: number): string => {
  const orderLines = items.map(item => {
    return `- ${item.plant.name} (${item.quantity} × $${item.plant.price}) = $${item.quantity * item.plant.price}`;
  }).join('\n');

  const message = `
*New Plant Order!*

*Items:*
${orderLines}

*Total:* $${totalPrice.toFixed(2)}

Please confirm if these plants are available for delivery. Thank you!
`;

  return message;
};

// Generate WhatsApp link with pre-filled message
export const formatWhatsAppLink = (items: CartItem[], totalPrice: number): string => {
  // This WhatsApp number should be replaced with your actual business WhatsApp number
  const phoneNumber = '9663360217'; // Example format: '1234567890' (no plus, spaces, or dashes)
  const message = formatWhatsAppMessage(items, totalPrice);
  
  // Encode the message for a URL
  const encodedMessage = encodeURIComponent(message);
  
  // Generate the WhatsApp link
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
};