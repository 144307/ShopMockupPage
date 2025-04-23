export interface product {
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

export interface cartItem extends product {
  amount: number;
}

export interface cartState {
  items: cartItem[];
}

export interface settingsState {
  darkMode: boolean;
}

export interface dataState {
  data: product[];
  dataToDisplay: product[];
}

export interface uiState {
  isOverlayOpened: boolean;
  isCartOpened: boolean;
}

export interface rootState {
  cart: cartState;
  settings: settingsState;
  productData: dataState;
  ui: uiState;
}
