import Card from "../Card/Card";
import "./MainPage.css";
import CartBlock from "../CartBlock/CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../cartSlice";
import { cartItem } from "../types";

function MainPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="main-page">
      <div className="redux-cart">
        <button
          onClick={() => {
            dispatch(clear());
          }}
        >
          Clear
        </button>
      </div>
      <CartBlock></CartBlock>
      <div className="grid">
        {Array.from(Array(70)).map((_, i) => {
          return (
            <Card product={{ id: i, name: "test" + i, price: i ** 2 }}></Card>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
