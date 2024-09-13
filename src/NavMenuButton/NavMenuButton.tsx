import "./NavMenuButton.css";

function NavMenuButton() {
  return (
    <div className="main-nav">
      <div className="navMenuButton">navMenuButton</div>
      <div className="sub-nav">
        {[...Array(10)].map((_, i) => {
          return (
            // <NavMenuInnerButton
            //   key={index}
            //   buttonName={button}
            //   buttonIndex={index}
            // />
            <div>{"test item " + i}</div>
          );
        })}
      </div>
    </div>
  );
}

export default NavMenuButton;
