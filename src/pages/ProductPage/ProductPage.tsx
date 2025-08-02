import Header from "../../components/Header/Header";
import { Product, RootState } from "../../types";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

function ProductPage() {
  const productData = useSelector((state: RootState) => state.productData);

  const { id } = useParams() as { id: string };
  const productID = parseInt(id);
  console.log("param:", id);

  console.log("test id:", id);

  return (
    <div>
      <Header></Header>
      <h1>Product Page</h1>
      <div>{productData.data.find((e: Product) => e.id === productID)?.id}</div>
    </div>
  );
}

export default ProductPage;
