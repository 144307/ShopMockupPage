import "./Overlay.less";
import { RootState } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import { setOverlayClosed } from "../../features/ui/uiSlice";
import { useCallback, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

function Overlay({ children }: Props) {
  const ui = useSelector((state: RootState) => state.ui);
  const dispatch = useDispatch();

  function closeOverlay() {
    dispatch(setOverlayClosed());
  }

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeOverlay();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div
      className={`overlay ${ui.isOverlayOpened ? "" : "overlay_hidden"}`}
      onClick={closeOverlay}
    >
      <div
        className="overlay__content-wrapper"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
        }}
      >
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
