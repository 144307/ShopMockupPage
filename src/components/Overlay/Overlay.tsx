import "./overlay.less";
import { rootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { setOverlayClosed } from "../../features/ui/uiSlice";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function Overlay({ children }: Props) {
  const ui = useSelector((state: rootState) => state.ui);
  const dispatch = useDispatch();

  function closeOverlay() {
    dispatch(setOverlayClosed());
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      closeOverlay();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={`overlay ${ui.isOverlayOpened ? "" : "overlay_hidden"}`}>
      <div className="overlay__content-wrapper">
        {children}
        <input
          className="close-button"
          type="image"
          onClick={closeOverlay}
          src="CloseButton.svg"
        />
      </div>
    </div>
  );
}

export default Overlay;
