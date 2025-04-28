import "./Card.less";
import { useEffect, useRef, useState } from "react";
import { cartItem, product, rootState } from "../../types.ts";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../Cart/cartSlice.ts";
import { Link } from "react-router-dom";

interface Props {
  product: product;
}

function Card({ product }: Props) {
  const cart = useSelector((state: rootState) => state.cart, shallowEqual);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const imageURL = product.imageURL;

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
    // const foundItemInCart = context?.cart.find(
    //   (e) => e.product.id === product.id
    // );
    const foundItemInCart = cart.items.find(
      (e: cartItem) => e.id === product.id
    );
    if (foundItemInCart) {
      setAmount(foundItemInCart.amount);
    } else {
      setAmount(0);
    }
  }, [cart]);

  function addProduct(product: product) {
    // console.log("id to increase", product);
    // dispatch({ type: "add", id: product.id, name: product.name });
    // context?.dispatch({ type: "add", product: product });
    dispatch(increment(product));
    // setAmount(amount + 1);
  }

  function removeProduct(product: product) {
    if (amount >= 1) {
      // context?.dispatch({ type: "remove", product: product });
      dispatch(decrement(product));
      // setAmount(amount - 1);
    }
  }

  return (
    <div
      className="card_4"
      id={"card" + product.id.toString()}
      key={product.id}
    >
      <div className="card__image-wrapper">
        <img className="card__image" src={imageURL} alt="image" />
      </div>
      <Link className="card__link" to={`/product/${product.id}`}>
        {/* Go to Product {product.id} */}
        <h3 className="card__heading">{product.name}</h3>
      </Link>
      <div className="card__price">{product.price}</div>
      <div className="addToCart" ref={addToCart}>
        <button
          className="addToCart__button addToCart__button_add"
          ref={addButton}
          onClick={() => {
            addProduct(product);
          }}
        >
          button
        </button>
        <div className="addToCart__quantity-controls">
          <input
            type="button"
            className="addToCart__button addToCart__value-button"
            onClick={() => {
              removeProduct(product);
            }}
            value={"-"}
          ></input>
          <div
            className="addToCart__counter"
            // contentEditable="true"
          >
            {/* {context?.cart.find((e) => e.product.id === product.id)
              ? "item in context"
              : amount} */}
            {amount}
          </div>
          <input
            type="button"
            className="addToCart__button addToCart__value-button"
            onClick={() => {
              addProduct(product);
            }}
            value={"+"}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Card;
