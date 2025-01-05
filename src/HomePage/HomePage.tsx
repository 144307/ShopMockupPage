import Card from "../Card/Card";
import "./HomePage.css";
import { shallowEqual, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { product, rootState } from "../types";

function HomePage() {
  const productData = useSelector(
    (state: rootState) => state.productData,
    shallowEqual
  );
  console.log("test", productData);

  return (
    <div className="main-page">
      <Header></Header>
      <div className="grid">
        {productData.dataToDisplay.map((e: product) => {
          return (
            <Card product={{ id: e.id, name: e.name, price: e.price }}></Card>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
