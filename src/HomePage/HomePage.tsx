import Card from "../Card/Card";
import "./HomePage.css";
import CartBlock from "../CartBlock/CartBlock";
// import { clear } from "../cartSlice";
import ThemeButton from "../ThemeButton/ThemeButton";

function HomePage() {
  // const cart = useSelector((state) => state.cart.items);

  return (
    <div className="main-page">
      <header className="header">
        {/* <div className="redux-cart">
          <button
            onClick={() => {
              dispatch(clear());
            }}
          >
            Clear
          </button>
        </div> */}
        <CartBlock></CartBlock>
        <ThemeButton></ThemeButton>
      </header>
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

export default HomePage;
