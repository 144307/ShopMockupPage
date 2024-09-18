import { useReducer } from "react";
import Card from "../Card/Card";
import "./MainPage.css";
import CartBlock from "../CartBlock/CartBlock";
import { CartContext } from "../CartContext";
import { product, cartItem } from "../types";
import TestBlock from "../TestBlock/TestBlock";
// import NavMenuButton from "../NavMenuButton/NavMenuButton";

function MainPage() {
  let initialCart: cartItem[] = [];

  const [cart, dispatch] = useReducer(taskReducer, initialCart);

  // function removeOneProduct(action: { type: string; product: product }) {
  //   const itemIndex: number = cart.findIndex(
  //     (e: cartItem) => e.product.id === action.product.id
  //   );
  //   if (cart[itemIndex]) {
  //     // console.log("id", action.product.id, "exists");
  //     const updatedCartItem: cartItem = cart[itemIndex];
  //     updatedCartItem.amount += 1;
  //     const updatedCart: cartItem[] = cart.toSpliced(
  //       itemIndex,
  //       1,
  //       updatedCartItem
  //     );
  //     return updatedCart;
  //   } else {
  //     throw Error("Product id " + action.product.id + " doesn't exist in cart");
  //   }
  // }

  function taskReducer(
    cart: cartItem[],
    action: { type: string; product: product }
  ) {
    const findCartItemIndex = (id: number) =>
      cart.findIndex((e) => e.product.id === id);
    const itemIndex = findCartItemIndex(action.product.id);
    // const indexToDecrease = findCartItemIndex(action.product.id);

    switch (action.type) {
      case "add":
        // const itemIndex: number = cart.findIndex(
        //   (e) => e.product.id === action.product.id
        // );
        // const itemIndex = findCartItemIndex(action.product.id);
        if (cart[itemIndex]) {
          // console.log("id", action.product.id, "exists");
          const updatedCartItem: cartItem = cart[itemIndex];
          updatedCartItem.amount += 1;
          const updatedCart: cartItem[] = cart.toSpliced(
            itemIndex,
            1,
            updatedCartItem
          );
          return updatedCart;
        } else {
          return [
            ...cart,
            {
              product: action.product,
              amount: 1,
            },
          ];
        }
      case "decrease":
        // const indexToDecrease: number = cart.findIndex(
        //   (e: cartItem) => e.product.id === action.product.id
        // );
        if (cart[itemIndex]) {
          const item = cart[itemIndex];
          if (item.amount > 1) {
            // console.log("id", action.product.id, "exists");
            const updatedCartItem: cartItem = cart[itemIndex];
            updatedCartItem.amount -= 1;
            const updatedCart: cartItem[] = cart.toSpliced(
              itemIndex,
              1,
              updatedCartItem
            );
            return updatedCart;
          }

          // const updatedCart = cart.toSpliced(itemIndex, 1);
          return cart.filter((_, i) => i !== itemIndex);
        }
        throw Error(
          "Product id " + action.product.id + " doesn't exist in cart"
        );

      default:
        throw Error("Unknown action: " + action.type);
    }
  }

  return (
    <>
      <CartContext.Provider value={{ cart, dispatch }}>
        {/* <CartDispatchContext.Provider value={dispatch}> */}
        <TestBlock></TestBlock>
        <CartBlock></CartBlock>
        {/* <NavMenuButton></NavMenuButton> */}
        <div className="grid">
          {Array.from(Array(7)).map((_, i) => {
            // console.log("check", i);
            return (
              <Card product={{ id: i, name: "test" + i, price: i ** 2 }}></Card>
            );
            // return <div>test</div>;
          })}
        </div>
        {/* </CartDispatchContext.Provider> */}
      </CartContext.Provider>
      <div className="states">
        <h4 className="states__heading">States</h4>
        {cart.map((e: cartItem) => {
          return (
            <>
              <div>{"id: " + e.product.id}</div>
              <div>{"name: " + e.product.name}</div>
              <div>{"price: " + e.product.price}</div>
              <div>{"amount: " + e.amount}</div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MainPage;
