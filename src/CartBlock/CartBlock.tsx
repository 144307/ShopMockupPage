import { useContext } from "react";
import { CartContext, CartDispatchContext } from "../CartContext";
import { cartItem } from "../types";
import "./CartBlock.css";

// interface Props {
//   cart: React.Context<number>;
//   children: string;
// }

// { cart, children }: Props
function CartBlock() {
  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  return (
    <div>
      <h3>Корзина</h3>
      <div>{"Количество товаров в корзине: " + cart.length}</div>
      {cart.map((cartItem: cartItem) => {
        return (
          <div key={"cartItem" + cartItem.product.id} className="cart-item">
            <p>{"Название: " + cartItem.product.name}</p>
            <div>{"Количество: " + cartItem.amount}</div>
            <div className="cart-item__menu">
              <input type="button" value={"-"}></input>
              <input type="button" value={"+"}></input>
              <input type="button" value={"Удалить"}></input>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartBlock;
