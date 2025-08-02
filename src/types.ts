export interface Product {
  id: number;
  name: string;
  price?: string;
  description?: string;
  imageURL: string;
}

// export interface cartItem {
//   product: product;
//   amount: number;
// }

export interface CartItem extends product {
  amount: number;
}

export interface CartState {
  items: CartItem[];
}

export interface SettingsState {
  darkMode: boolean;
}

export interface DataState {
  data: Product[];
  dataToDisplay: Product[];
}

export interface UIState {
  isOverlayOpened: boolean;
  isCartOpened: boolean;
}

export interface RootState {
  cart: CartState;
  settings: SettingsState;
  productData: DataState;
  ui: UIState;
}
