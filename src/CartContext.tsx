import { createContext, ReactNode, useReducer } from "react";
import { cartItem, MyContext } from "./types";

// export interface MyContext {
//   cart: cartItem[];
//   dispatch: React.Dispatch<MyAction>
// }

const CartContext = createContext<MyContext | null>(null);

let initialCart: cartItem[] = [];

function cartReducer(
  cart: cartItem[],
  action: { type: string; product: product }
) {
  const findCartItemIndex = (id: number) =>
    cart.findIndex((e) => e.product.id === id);
  const itemIndex = findCartItemIndex(action.product.id);
  // const indexToremove = findCartItemIndex(action.product.id);

  switch (action.type) {
    case "add":
      if (cart[itemIndex]) {
        // console.log("id", action.product.id, "exists");
        const updatedCartItem: cartItem = cart[itemIndex];
        updatedCartItem.amount += 1;
        // const newUpdatedCart: cartItem[] = cart.filter((e)=> e.product.id == updatedCartItem.product.id)
        const updatedCart: cartItem[] = cart.toSpliced(
          itemIndex,
          1,
          updatedCartItem
        );
        return updatedCart;
      } else {
        return [
          ...cart,
          {
            product: action.product,
            amount: 1,
          },
        ];
      }
    case "remove":
      // const indexToremove: number = cart.findIndex(
      //   (e: cartItem) => e.product.id === action.product.id
      // );
      if (cart[itemIndex]) {
        const item = cart[itemIndex];
        if (item.amount > 1) {
          // console.log("id", action.product.id, "exists");
          const updatedCartItem: cartItem = cart[itemIndex];
          updatedCartItem.amount -= 1;
          const updatedCart: cartItem[] = cart.toSpliced(
            itemIndex,
            1,
            updatedCartItem
          );
          return updatedCart;
        }

        // const updatedCart = cart.toSpliced(itemIndex, 1);
        // return updatedCart;
        return cart.filter((_, i) => i !== itemIndex);
      }
      throw Error("Product id " + action.product.id + " doesn't exist in cart");

    case "delete":
      return cart.filter((_, i) => i !== itemIndex);
    default:
      throw Error("Unknown action: " + action.type);
  }
}

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, cartReducer };
