import "./CartBlock.less";
import minusImage from "../../assets/minus.svg";
import plusImage from "../../assets/plus.svg";
import { useRef, useState } from "react";
import { cartItem, rootState } from "../../types.ts";
import { increment, decrement, deleteFromCart } from "./cartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { setCartClose, setCartOpen } from "../../features/ui/uiSlice.ts";
import { createPortal } from "react-dom";

function CartBlock() {
  const root = document.getElementById("root")!;
  const cart = useSelector((state: rootState) => state.cart);
  const cartDisplayState = useSelector(
    (state: rootState) => state.ui.isCartOpened
  );
  const dispatch = useDispatch();
  // const cartContext = useRef<HTMLDivElement>(null);
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
      console.log(pos);
    }
    if (cartDisplayState) {
      dispatch(setCartClose());
    } else {
      dispatch(setCartOpen());
      if (cartDisplayState) {
        dispatch(setCartClose());
      } else {
        dispatch(setCartOpen());
      }
    }
  }

  const cartContent = () => {
    return (
      <>
        {cart.items.map((cartItem: cartItem) => {
          return (
            <div className="cart-item" key={"cartItem" + cartItem.product.id}>
              <img
                className="cart-item-image"
                src={cartItem.product.imageURL}
                alt={cartItem.product.name}
              />
              <div className="cart-item-info">
                <p className="cart-item-title">{cartItem.product.name}</p>
                <div className="cart-item-price">{cartItem.product.price}</div>
                <div className="cart-counter">
                  <button
                    className="button-small-square"
                    onClick={() => {
                      dispatch(decrement(cartItem.product));
                    }}
                  >
                    <img className="button-internal-image" src={minusImage} />
                  </button>
                  <div className="text-square-container">{cartItem.amount}</div>
                  <button
                    className="button-small-square"
                    onClick={() => {
                      dispatch(increment(cartItem.product));
                    }}
                  >
                    <img className="button-internal-image" src={plusImage} />
                  </button>
                  <button
                    className="button-small"
                    onClick={() => {
                      dispatch(deleteFromCart(cartItem.product));
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
          <div
            className="cart-popup"
            style={{ left: `${pos.left}px`, top: `${pos.top}px` }}
            // ref={cartContext}
          >
            <div>{"Количество товаров в корзине: " + cart.items.length}</div>
            {cart.items.length ? cartContent() : <div>No items</div>}
          </div>,
          root
        )}
    </div>
  );
}

export default CartBlock;
