import "./FormButton.less";
import { setOverlayOpen } from "../../features/ui/uiSlice";
import { useDispatch } from "react-redux";

function FormButton() {
  // const ui = useSelector((state: rootState) => state.ui);
  const dispatch = useDispatch();

  function openOverlay() {
    dispatch(setOverlayOpen());
  }

  return (
    <input
      className="form-button"
      type="button"
      onClick={openOverlay}
      value={"Login"}
    />
  );
}

export default FormButton;
