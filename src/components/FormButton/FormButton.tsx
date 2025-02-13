import { setOverlayOpen } from "../../features/ui/uiSlice";
import { useDispatch } from "react-redux";

function FormButton() {
  // const ui = useSelector((state: rootState) => state.ui);
  const dispatch = useDispatch();

  function openOverlay() {
    dispatch(setOverlayOpen());
  }

  return <input type="button" onClick={openOverlay} value={"Login"} />;
}

export default FormButton;
