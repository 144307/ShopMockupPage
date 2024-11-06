import CartBlock from "../../CartBlock/CartBlock";
import ThemeButton from "../../ThemeButton/ThemeButton";

function Header() {
  return (
    <header className="header">
      <CartBlock></CartBlock>
      <ThemeButton></ThemeButton>
    </header>
  );
}

export default Header;
