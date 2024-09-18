import { createContext } from "react";
import { MyContext } from "./types";

// export interface MyContext {
//   cart: cartItem[];
//   dispatch: React.Dispatch<MyAction>
// }

export const CartContext = createContext<MyContext | null>(null);
// export const CartDispatchContext = createContext<cartItem[]>([]);
