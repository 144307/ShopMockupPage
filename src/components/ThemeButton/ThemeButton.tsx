import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../settingsSlice.ts";
import "./ThemeButton.css";
import { rootState } from "../../types";

function ThemeButton() {
  const settings = useSelector(
    (state: rootState) => state.settings,
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("settings updated", settings.darkMode);
  }, [settings.darkMode]);

  return (
    <button
      className="theme-button"
      onClick={() => {
        if (settings.darkMode) {
          dispatch(setLightMode());
        } else {
          dispatch(setDarkMode());
        }
      }}
    >
      <img
        className="theme-button__image"
        src="/dark-theme-svgrepo-com.svg"
      ></img>
    </button>
  );
}

export default ThemeButton;
