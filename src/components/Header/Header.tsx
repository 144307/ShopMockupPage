import "./Header.less";
import Cart from "../Cart/Cart.tsx";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import FormButton from "../FormButton/FormButton";

function Header() {
  return (
    <header className="header">
      <Cart></Cart>
      <ThemeButton></ThemeButton>
      <FormButton></FormButton>
    </header>
  );
}

export default Header;
