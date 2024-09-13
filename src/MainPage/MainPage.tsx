import { useReducer, Dispatch } from "react";
import Card from "../Card/Card";
import "./MainPage.css";
import CartBlock from "../CartBlock/CartBlock";
import { CartContext, CartDispatchContext } from "../CartContext";
import { product, cartItem } from "../types";
// import NavMenuButton from "../NavMenuButton/NavMenuButton";

function MainPage() {
  let initialCart: cartItem[] = [];

  const [cart, dispatch] = useReducer(taskReducer, initialCart);

  function removeOneProduct(action: { type: string; product: product }) {
    const itemIndex: number = cart.findIndex(
      (e: cartItem) => e.product.id === action.product.id
    );
    if (cart[itemIndex]) {
      // console.log("id", action.product.id, "exists");
      const updatedCartItem: cartItem = cart[itemIndex];
      updatedCartItem.amount += 1;
      const updatedCart: product[] = cart.toSpliced(
        itemIndex,
        1,
        updatedCartItem
      );
      return updatedCart;
    } else {
      throw Error("Product id " + action.product.id + " doesn't exist in cart");
    }
  }

  function taskReducer(
    cart: cartItem[],
    action: { type: string; product: product }
  ) {
    switch (action.type) {
      case "add":
        const itemIndex: number = cart.findIndex(
          (e) => e.product.id === action.product.id
        );
        if (cart[itemIndex]) {
          // console.log("id", action.product.id, "exists");
          const updatedCartItem: cartItem = cart[itemIndex];
          updatedCartItem.amount += 1;
          const updatedCart: product[] = cart.toSpliced(
            itemIndex,
            1,
            updatedCartItem
          );
          return updatedCart;
        } else {
          // console.log("id", action.product.id, "doesn't exist");
          return [
            ...cart,
            {
              product: action.product,
              amount: 1,
            },
          ];
        }
      case "remove":
        return removeOneProduct(action);
      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  return (
    <>
      <CartContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
          <CartBlock></CartBlock>
          {/* <NavMenuButton></NavMenuButton> */}
          <div className="grid">
            {Array.from(Array(7)).map((_, i) => {
              // console.log("check", i);
              return (
                <Card
                  product={{ id: i, name: "test" + i, price: i ** 2 }}
                ></Card>
              );
              // return <div>test</div>;
            })}
          </div>
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </>
  );
}

export default MainPage;
