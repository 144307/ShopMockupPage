import Header from "../../components/Header/Header";
import { product, rootState } from "../../types";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function ProductPage() {
  const productData = useSelector((state: rootState) => state.productData);

  const { id } = useParams() as { id: string };
  const productID = parseInt(id);
  console.log("param:", id);

  console.log("test id:", id);

  return (
    <div>
      <h1>Product Page</h1>
      <div>{productData.data.find((e: product) => e.id === productID)?.id}</div>
      <Header></Header>
    </div>
  );
}

export default ProductPage;
