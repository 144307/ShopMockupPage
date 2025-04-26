import "./Cart.less";
import minusImage from "../../assets/minus.svg";
import plusImage from "../../assets/plus.svg";
import { useRef, useState } from "react";
import { cartItem, rootState } from "../../types.ts";
import { increment, decrement, deleteFromCart } from "./cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { setCartClose, setCartOpen } from "../../features/ui/uiSlice.ts";
import { createPortal } from "react-dom";
import Popup from "../Popup/Popup.tsx";

function Cart() {
  const root = document.getElementById("root")!;
  const cart = useSelector((state: rootState) => state.cart);
  const cartDisplayState = useSelector(
    (state: rootState) => state.ui.isCartOpened
  );
  const dispatch = useDispatch();
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const [pos, setPos] = useState<{ left: number; top: number }>({
    left: 0,
    top: 0,
  });

  function toggleCart() {
    if (cartButtonRef.current?.getBoundingClientRect()) {
      setPos({
        left: cartButtonRef.current?.getBoundingClientRect().left,
        top: cartButtonRef.current?.getBoundingClientRect().bottom + 8,
      });
    }
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
            <div
              className="cart-item"
              key={"cartItem" + cartItem.id}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img
                className="cart-item-image"
                src={cartItem.imageURL}
                alt={cartItem.name}
              />
              <div className="cart-item-info">
                <p className="cart-item-title">{cartItem.name}</p>
                <div className="cart-item-price">{cartItem.price}</div>
                <div className="cart-counter">
                  <button
                    className="button-small-square"
                    onClick={() => {
                      dispatch(decrement(cartItem));
                    }}
                  >
                    <img className="button-internal-image" src={minusImage} />
                  </button>
                  <div className="text-square-container">{cartItem.amount}</div>
                  <button
                    className="button-small-square"
                    onClick={() => {
                      dispatch(increment(cartItem));
                    }}
                  >
                    <img className="button-internal-image" src={plusImage} />
                  </button>
                  <button
                    className="button-small"
                    onClick={() => {
                      dispatch(deleteFromCart(cartItem));
                    }}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div className="cart">
      <button
        className="cart__button button"
        ref={cartButtonRef}
        onClick={toggleCart}
      >
        Корзина
      </button>
      {cartDisplayState &&
        createPortal(
          <Popup x={pos.left} y={pos.top}>
            <div>
              {"Количество товаров в корзине: " +
                cart.items.reduce((acc, e) => (acc += e.amount), 0)}
            </div>
            <div>
              {"Стоимость товаров в корзине: " +
                cart.items
                  .reduce(
                    (acc, e) =>
                      (acc += Number(e.price?.split("$")[1]) * e.amount),
                    0
                  )
                  .toFixed(2)}
            </div>
            {cart.items.length ? cartContent() : <div>No items</div>}
          </Popup>,
          root
        )}
    </div>
  );
}

export default Cart;
