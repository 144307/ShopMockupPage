import "./Header.less";
import Cart from "../Cart/Cart.tsx";
import FormButton from "../FormButton/FormButton";

function Header() {
  return (
    <header className="header">
      <Cart></Cart>
      <FormButton></FormButton>
    </header>
  );
}

export default Header;
