export interface Plant {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  plant: Plant;
  quantity: number;
}