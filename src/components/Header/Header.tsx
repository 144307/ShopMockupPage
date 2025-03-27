import "./Header.less";
import CartBlock from "../../CartBlock/CartBlock";
import ThemeButton from "../../ThemeButton/ThemeButton";
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
