export interface product {
  id: number;
  name: string;
  price?: number;
}

export interface cartItem {
  product: product;
  amount: number;
}

export interface MyAction {
  type: string;
  product: product;
}

export interface MyContext {
  cart: cartItem[];
  dispatch: React.Dispatch<MyAction>;
}
