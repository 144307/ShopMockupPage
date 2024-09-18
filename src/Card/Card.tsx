import { useContext, useEffect, useRef, useState } from "react";
import "./Card.css";
import { CartContext } from "../CartContext";
import { product } from "../types";

interface Props {
  product: product;
}

function Card({ product }: Props) {
  const [amount, setAmount] = useState(0);

  const context = useContext(CartContext);
  // const dispatch = useContext(CartDispatchContext);

  const addButton = useRef<HTMLButtonElement>(null);
  const addToCart = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (addButton.current && addToCart.current) {
      if (amount > 0) {
        addButton.current.style.visibility = "hidden";
        addToCart.current.style.visibility = "visible";
      } else if (amount === 0) {
        addButton.current.style.visibility = "visible";
        addToCart.current.style.visibility = "hidden";
      } else {
        throw new Error("wrong amount");
      }
    } else {
      throw new Error("addButton.current or addToCart.current undefined");
    }
  }, [amount]);

  useEffect(() => {
    console.log("check amount in context");
    const foundItemInCart = context?.cart.find(
      (e) => e.product.id === product.id
    );
    if (foundItemInCart) {
      setAmount(foundItemInCart.amount);
    } else {
      setAmount(0);
    }
  }, [context]);

  function increaseAmount(product: product) {
    // console.log("id to increase", product);
    // dispatch({ type: "add", id: product.id, name: product.name });
    context?.dispatch({ type: "add", product: product });
    // setAmount(amount + 1);
  }
  function removeAmount(product: product) {
    if (amount >= 1) {
      context?.dispatch({ type: "remove", product: product });
      // setAmount(amount - 1);
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
              removeAmount(product);
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
            {/* {context?.cart.find((e) => e.product.id === product.id)
              ? "item in context"
              : amount} */}
            {amount}
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

      <div className="states">
        <h4 className="states__heading">States</h4>
        <div>{"amount: " + amount}</div>
      </div>
    </div>
  );
}

export default Card;
