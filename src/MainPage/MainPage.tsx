import Card from "../Card/Card";
import "./MainPage.css";
import CartBlock from "../CartBlock/CartBlock";
import { CartProvider } from "../CartContext";

function MainPage() {
  return (
    <>
      <CartProvider>
        <CartBlock></CartBlock>
        <div className="grid">
          {Array.from(Array(7)).map((_, i) => {
            return (
              <Card product={{ id: i, name: "test" + i, price: i ** 2 }}></Card>
            );
          })}
        </div>
      </CartProvider>
      {/* <div className="states">
        <h4 className="states__heading">States</h4>
        {context?.cart.map((e: cartItem) => {
          console.log("check", e);
          return (
            <>
              <div>{"id: " + e.product.id}</div>
              <div>{"name: " + e.product.name}</div>
              <div>{"price: " + e.product.price}</div>
              <div>{"amount: " + e.amount}</div>
            </>
          );
        })}
      </div> */}
    </>
  );
}

export default MainPage;
