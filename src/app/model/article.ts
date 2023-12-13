export interface Article {
  name: string;
  imageURL: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  quantitySelected?: number;
}
