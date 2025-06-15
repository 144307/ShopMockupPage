import "./Popup.less";
import { useDispatch } from "react-redux";
import useClickOutside from "../../hooks/useClickOutside";
import { ReactNode, useRef } from "react";
import { setCartClose } from "../../features/ui/uiSlice";

interface Props {
  children: ReactNode;
  x: number;
  y: number;
}

function Popup({ children: children, x: x, y: y }: Props) {
  const dispatch = useDispatch();
  const popupRef = useRef<HTMLDivElement>(null);

  function callback() {
    dispatch(setCartClose());
  }

  useClickOutside(popupRef, callback);

  return (
    <div
      ref={popupRef}
      className="cart-popup"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      {children}
    </div>
  );
}

export default Popup;
