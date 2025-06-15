import "./HomePage.css";
import { shallowEqual, useSelector } from "react-redux";
import { product, rootState } from "../../types";
import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import Overlay from "../../components/Overlay/Overlay";
import Form from "../../components/Form/Form";
import { createPortal } from "react-dom";

function HomePage() {
  const root = document.getElementById("root")!;
  const productData = useSelector(
    (state: rootState) => state.productData,
    shallowEqual
  );
  const overlayOpened = useSelector(
    (state: rootState) => state.ui.isOverlayOpened
  );

  function onFormSubmit(values: { username: string; password: string }) {
    console.log("username:", values.username, "password:", values.password);
  }

  return (
    <main className="main-page">
      {/* <a href={"/product/" + testID}>Test Link</a> */}
      {/* <Link to={`/product/${testID}`}>Test Link</Link> */}
      {/* <Link to="/product/2">Test Link 2</Link> */}
      <Header></Header>
      <div className="grid">
        {productData.dataToDisplay.map((e: product, i) => {
          return <Card product={e} key={i}></Card>;
        })}
      </div>

      {overlayOpened &&
        createPortal(
          <Overlay>
            <Form mode={"signup"} onSubmit={onFormSubmit}></Form>
          </Overlay>,
          root
        )}
    </main>
  );
}

export default HomePage;
