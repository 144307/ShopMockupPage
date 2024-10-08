import { useRef } from "react";
import { cartItem } from "../types";
import { increment, clear, decrement, deleteFromCart } from "../cartSlice";
import "./CartBlock.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function CartBlock() {
  const cart = useSelector((state) => state.cart, shallowEqual);
  const dispatch = useDispatch();

  const cartContext = useRef<HTMLDivElement>(null);

  function toggleCart() {
    if (
      cartContext.current &&
      cartContext.current.style.visibility === "hidden"
    ) {
      cartContext.current.style.visibility = "visible";
    } else if (cartContext.current) {
      cartContext.current.style.visibility = "hidden";
    }
  }

  const cartContent = () => {
    return (
      <>
        {cart.items.map((cartItem: cartItem) => {
          return (
            <div key={"cartItem" + cartItem.product.id} className="cart-item">
              <p>{"Название: " + cartItem.product.name}</p>
              <div>{"Количество: " + cartItem.amount}</div>
              <div className="cart-item__menu">
                <input
                  type="button"
                  value={"-"}
                  onClick={() => {
                    dispatch(decrement(cartItem.product));
                  }}
                ></input>
                <input
                  type="button"
                  value={"+"}
                  onClick={() => {
                    dispatch(increment(cartItem.product));
                  }}
                ></input>
                <input
                  type="button"
                  value={"Удалить"}
                  onClick={() => {
                    dispatch(deleteFromCart(cartItem.product));
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
      <div>{"Количество товаров в корзине: " + cart.items.length}</div>
      {/* <div>{cartContent()}</div> */}
      <div className="cart__content" ref={cartContext}>
        {cart.items.length ? cartContent() : <div>No items</div>}
      </div>
    </div>
  );
}

export default CartBlock;
