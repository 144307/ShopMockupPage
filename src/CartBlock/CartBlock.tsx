import { useContext } from "react";
import { CartContext } from "../CartContext";
import { cartItem } from "../types";
import "./CartBlock.css";

// interface Props {
//   cart: React.Context<number>;
//   children: string;
// }

// { cart, children }: Props
function CartBlock() {
  const context = useContext(CartContext);

  // useEffect(() => {
  // }, [context]);

  // const dispatch = useContext(CartDispatchContext);

  return (
    <div>
      <h3>Корзина</h3>
      <div>{"Количество товаров в корзине: " + context?.cart.length}</div>
      {context?.cart.map((cartItem: cartItem) => {
        return (
          <div key={"cartItem" + cartItem.product.id} className="cart-item">
            <p>{"Название: " + cartItem.product.name}</p>
            <div>{"Количество: " + cartItem.amount}</div>
            <div className="cart-item__menu">
              <input
                type="button"
                value={"-"}
                onClick={() => {
                  context?.dispatch({
                    type: "remove",
                    product: cartItem.product,
                  });
                }}
              ></input>
              <input
                type="button"
                value={"+"}
                onClick={() => {
                  context?.dispatch({ type: "add", product: cartItem.product });
                }}
              ></input>
              <input
                type="button"
                value={"Удалить"}
                onClick={() => {
                  context?.dispatch({
                    type: "delete",
                    product: cartItem.product,
                  });
                }}
              ></input>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartBlock;
