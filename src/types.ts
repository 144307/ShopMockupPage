export interface product {
  id: number;
  name: string;
  price?: number;
}

export interface cartItem {
  product: product;
  amount: number;
}

// interface character {
//   y: number;
//   x: number;
//   name: string;
// }

// let Hero: character = {
//   x: 1,
//   y: 4,
//   name: "name",
// };
