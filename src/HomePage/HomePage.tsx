import Card from "../Card/Card";
import "./HomePage.css";
import { shallowEqual, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import { product, rootState } from "../types";
import { Link } from "react-router";
import Overlay from "../components/Overlay/Overlay";
import Form from "../components/Form/Form";

function HomePage() {
  const productData = useSelector(
    (state: rootState) => state.productData,
    shallowEqual
  );
  console.log("test", productData);

  const testID = 2;

  function onFormSubmit(values: { username: string; password: string }) {
    console.log("username:", values.username, "password:", values.password);
  }

  return (
    <main className="main-page">
      {/* <a href={"/product/" + testID}>Test Link</a> */}
      {/* <Link to={`/product/${testID}`}>Test Link</Link> */}
      {/* <Link to="/product/2">Test Link 2</Link> */}
      <Header></Header>
      <Link to={`/product/${testID}`}>Go to Product {testID}</Link>
      <div className="grid">
        {productData.dataToDisplay.map((e: product) => {
          return <Card product={e}></Card>;
        })}
      </div>
      <Overlay>
        <Form mode={"signup"} onSubmit={onFormSubmit}></Form>
      </Overlay>
    </main>
  );
}

export default HomePage;
