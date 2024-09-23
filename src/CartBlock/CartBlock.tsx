import { useContext, useRef } from "react";
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

  const cartContext = useRef<HTMLDivElement>(null);

  function toggleCart() {
    console.log("context", context);
    if (
      cartContext.current &&
      cartContext.current.style.visibility === "hidden"
    ) {
      cartContext.current.style.visibility = "visible";
    } else if (cartContext.current) {
      cartContext.current.style.visibility = "hidden";
    }
  }

  const cartContent = (context) => {
    return (
      <>
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
                    context?.dispatch({
                      type: "add",
                      product: cartItem.product,
                    });
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
      </>
    );
  };

  return (
    <div>
      <button className="cart__button" onClick={toggleCart}>
        Корзина
      </button>
      <div>{"Количество товаров в корзине: " + context?.cart.length}</div>
      {/* <div>{cartContent()}</div> */}
      <div className="cart__content" ref={cartContext}>
        {context?.cart.length ? cartContent(context) : <div>No items</div>}
      </div>
    </div>
  );
}

export default CartBlock;
