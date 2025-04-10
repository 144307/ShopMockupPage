import "./Header.less";
import CartBlock from "../../components/CartBlock/CartBlock.tsx";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import FormButton from "../FormButton/FormButton";

function Header() {
  return (
    <header className="header">
      <CartBlock></CartBlock>
      <ThemeButton></ThemeButton>
      <FormButton></FormButton>
    </header>
  );
}

export default Header;
