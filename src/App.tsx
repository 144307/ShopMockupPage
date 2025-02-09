import { Route, Routes } from "react-router";
import HomePage from "./HomePage/HomePage";
import ProductPage from "./ProductPage/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/product/:id" element={<ProductPage />}></Route>
    </Routes>
  );
}

export default App;
