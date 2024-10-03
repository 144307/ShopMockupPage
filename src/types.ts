export interface product {
  id: number;
  name: string;
  price?: number;
}

export interface cartItem {
  product: product;
  amount: number;
}
