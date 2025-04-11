import "./CartBlock.css";
import { useEffect, useRef } from "react";
import { cartItem, rootState } from "../../types.ts";
import { increment, decrement, deleteFromCart } from "./cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { setCartClose, setCartOpen } from "../../features/ui/uiSlice.ts";

function CartBlock() {
  const cart = useSelector((state: rootState) => state.cart);
  const cartDisplayState = useSelector(
    (state: rootState) => state.ui.isCartOpened
  );
  const dispatch = useDispatch();

  const cartContext = useRef<HTMLDivElement>(null);

  function toggleCart() {
    console.log("toggleCart");
    if (cartDisplayState) {
      dispatch(setCartClose());
    } else {
      dispatch(setCartOpen());
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
      {cartDisplayState ? (
        <div className="cart__content" ref={cartContext}>
          {cart.items.length ? (
            cartContent() ? (
              cartContent()
            ) : (
              <div>No items</div>
            )
          ) : (
            "hidden"
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartBlock;
