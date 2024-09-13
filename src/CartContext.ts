import { createContext } from "react";
import { cartItem } from "./types";

export const CartContext = createContext<cartItem[]>([]);
export const CartDispatchContext = createContext<cartItem[]>([]);
