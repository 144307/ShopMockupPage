import "./Ribbon.less";
import reactIcon from "../../assets/images/logos/react.png";
import reduxIcon from "../../assets/images/logos/redux.svg";
import typescriptIcon from "../../assets/images/logos/typescript.png";
import reactRouterIcon from "../../assets/images/logos/reactrouter.svg";
import viteIcon from "../../assets/images/logos/vite.svg";
import lessIcon from "../../assets/images/logos/less.png";

function Ribbon() {
  return (
    <div className="ribbon">
      <div className="scroll">
        <div className="group">
          <div className="ribbon__item">
            <img className="image" src={reactIcon} alt="React Logo" />
          </div>
          <div className="ribbon__item">
            <img className="image" src={reduxIcon} alt="Redux Logo" />
          </div>
          <div className="ribbon__item">
            <img
              className="image"
              src={reactRouterIcon}
              alt="React Router Logo"
            />
          </div>
          <div className="ribbon__item">
            <img className="image" src={typescriptIcon} alt="Typescript Logo" />
          </div>
          <div className="ribbon__item">
            <img className="image" src={viteIcon} alt="Vite Logo" />
          </div>
          <div className="ribbon__item">
            <img className="image" src={lessIcon} alt="Less Logo" />
          </div>
        </div>
        <div className="group">
          <div className="ribbon__item">
            <img className="image" src={reactIcon} alt="React Logo" />
          </div>
          <div className="ribbon__item">
            <img className="image" src={reduxIcon} alt="Redux Logo" />
          </div>
          <div className="ribbon__item">
            <img
              className="image"
              src={reactRouterIcon}
              alt="React Router Logo"
            />
          </div>
          <div className="ribbon__item">
            <img className="image" src={typescriptIcon} alt="Typescript Logo" />
          </div>
          <div className="ribbon__item">
            <img className="image" src={viteIcon} alt="Vite Logo" />
          </div>
          <div className="ribbon__item">
            <img className="image" src={lessIcon} alt="Less Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ribbon;
