import { useContext, useEffect, useRef, useState } from "react";
import "./Card.css";
import { CartContext, CartDispatchContext } from "../CartContext";
import { product } from "../types";

interface Props {
  product: product;
}

function Card({ product }: Props) {
  const [amount, setAmount] = useState(0);

  const cart = useContext(CartContext);
  const dispatch = useContext(CartDispatchContext);

  const addButton = useRef<HTMLButtonElement>(null);
  const addToCart = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (amount > 0) {
      addButton.current.style.visibility = "hidden";
      addToCart.current.style.visibility = "visible";
    } else if (amount === 0) {
      addButton.current.style.visibility = "visible";
      addToCart.current.style.visibility = "hidden";
    } else {
      throw new Error("wrong amount");
    }
  }, [amount]);

  function increaseAmount(product: product) {
    // console.log("id to increase", product);
    // dispatch({ type: "add", id: product.id, name: product.name });
    dispatch({ type: "add", product: product });
    setAmount(amount + 1);
  }
  function decreaseAmount(product: product) {
    if (amount >= 1) {
      dispatch({ type: "remove", product: product });
      setAmount(amount - 1);
    }
  }

  return (
    <div className="card" id={"card" + product.id.toString()} key={product.id}>
      <img className="card__image" alt="image" />
      <h3 className="card__heading">card__heading</h3>
      <div>
        <div>{"id: " + product.id}</div>
        <div>{"name: " + product.name}</div>
        <div>{"price: " + product.price}</div>
      </div>
      <div className="addToCart" ref={addToCart}>
        <button
          className="addToCart__button"
          ref={addButton}
          onClick={() => {
            increaseAmount(product);
          }}
        >
          button
        </button>
        <div className="addToCart__counter">
          <input
            type="button"
            className="addToCart__control"
            onClick={() => {
              decreaseAmount(product);
            }}
            value={"-"}
          ></input>
          <div
            className="addToCart__amount"
            // contentEditable="true"
            onClick={() => {
              console.log("test");
            }}
          >
            {cart.find((e) => e.product.id === product.id)
              ? "item in cart"
              : amount}
          </div>
          <input
            type="button"
            className="addToCart__control"
            onClick={() => {
              increaseAmount(product);
            }}
            value={"+"}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Card;
