import "./overlay.less";
import { rootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { setOverlayClosed } from "../../features/ui/uiSlice";

interface Props {
  children: React.ReactNode;
}

function Overlay({ children }: Props) {
  const ui = useSelector((state: rootState) => state.ui);
  const dispatch = useDispatch();

  return (
    <div className={`overlay ${ui.isOverlayOpened ? "" : "overlay_hidden"}`}>
      <div className="overlay__content-wrapper">
        {children}
        <input
          className="close-button"
          type="image"
          onClick={() => {
            dispatch(setOverlayClosed());
          }}
          src="close-icon.svg"
        />
      </div>
    </div>
  );
}

export default Overlay;
