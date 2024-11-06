import Card from "../Card/Card";
import "./HomePage.css";
import { shallowEqual, useSelector } from "react-redux";
import Header from "../components/Header/Header";

function HomePage() {
  const productData = useSelector((state) => state.productData, shallowEqual);

  return (
    <div className="main-page">
      <Header></Header>
      <div className="grid">
        {productData.map((e) => {
          return (
            <Card
              product={{ id: e.id, name: e.product, price: e.price }}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
