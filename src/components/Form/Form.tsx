import { useDispatch } from "react-redux";
// import { setOverlayClosed } from "../../features/ui/uiSlice";
import "./Form.less";
import { useRef, useState } from "react";

interface Props {
  mode: "signup" | "login";
  onSubmit: (values: { username: string; password: string }) => void;
}

interface Errors {
  username?: string;
  password?: string;
  confirmPassword?: string;
}

function Form({ mode: mode, onSubmit: onSubmit }: Props) {
  const dispatch = useDispatch();

  const form = useRef<HTMLFormElement>(null);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  // const passwordRef = useRef<ReactElement<HTMLInputElement>>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function showPassword() {
    if (passwordRef.current) {
      if (passwordVisible === false) {
        setPasswordVisible(true);
      } else {
        setPasswordVisible(false);
      }
    }
  }

  function validate() {
    let valid = true;
    const newErrors: Errors = {};

    if (!username.trim()) {
      newErrors.username = "Username is required";
      valid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    if (mode === "signup") {
      if (!confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
        valid = false;
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log("handleSubmit");
    e.preventDefault();
    if (validate()) {
      onSubmit({ username: "", password: "" });
    }
  }

  return (
    <form ref={form} className="form" onSubmit={handleSubmit}>
      <h2 className="form__heading">Submit form</h2>
      <div className="form__input-wrapper">
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className={`form__input ${
            errors.username ? "form__input_error" : ""
          }`}
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div
          className={`form__error ${errors.username ? "form__error_show" : ""}`}
        >
          {errors.username ? errors.username : ""}
        </div>
      </div>
      <div className="form__input-wrapper">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <div className="form__input-wrapper_2">
          <input
            className={`form__input form__input_left-half ${
              errors.password ? "form__input_error" : ""
            }`}
            ref={passwordRef}
            id="password"
            type={passwordVisible ? "text" : "password"}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input
            className={`form__show-password ${
              passwordVisible === true && "form__show-password_eye-closed"
            }`}
            type="button"
            onClick={showPassword}
          />
        </div>
        <div
          className={`form__error ${errors.password ? "form__error_show" : ""}`}
        >
          {errors.password}
        </div>
      </div>
      {mode === "signup" && (
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className={`form__input ${
              errors.confirmPassword ? "form__input_error" : ""
            }`}
            id="confirm-password"
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <div
            className={`form__error ${
              errors.confirmPassword ? "form__error_show" : ""
            }`}
          >
            {errors.confirmPassword}
          </div>
        </div>
      )}
      <input
        className="form_submit"
        type="submit"
        value={"Submit"}
        onClick={() => {
          // dispatch(setOverlayClosed());
        }}
      />
    </form>
  );
}

export default Form;
