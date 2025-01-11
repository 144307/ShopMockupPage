import Card from "../Card/Card";
import "./HomePage.css";
import { shallowEqual, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { product, rootState } from "../types";
import { Link } from "react-router";

function HomePage() {
  const productData = useSelector(
    (state: rootState) => state.productData,
    shallowEqual
  );
  console.log("test", productData);

  const testID = 2;

  return (
    <div className="main-page">
      {/* <a href={"/product/" + testID}>Test Link</a> */}
      {/* <Link to={`/product/${testID}`}>Test Link</Link> */}
      <Link to={`/product/${testID}`}>Go to Product {testID}</Link>
      {/* <Link to="/product/2">Test Link 2</Link> */}
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
