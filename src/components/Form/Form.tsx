import "./Form.less";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { rootState } from "../../types";
import { setOverlayClosed } from "../../features/ui/uiSlice";

interface Props {
  mode: "signup" | "login";
  onSubmit: (values: { username: string; password: string }) => void;
}

interface Errors {
  username: string[];
  password: string[];
  confirmPassword: string[];
}

function Form({ mode: mode, onSubmit: onSubmit }: Props) {
  const ui = useSelector((state: rootState) => state.ui);
  const dispatch = useDispatch();

  const form = useRef<HTMLFormElement>(null);
  const hasNumber = /\d/;
  const hasCapitalLetter = /\p{Lu}/u;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<Errors>({
    username: [],
    password: [],
    confirmPassword: [],
  });
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!ui.isOverlayOpened) {
      resetForm();
    }
  }, [ui.isOverlayOpened]);

  useEffect(() => {
    console.log("Errors", errors);
  }, [errors]);

  function resetForm() {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setPasswordVisible(false);
    setErrors({
      username: [],
      password: [],
      confirmPassword: [],
    });
  }

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
    const newErrors: Errors = {
      username: [],
      password: [],
      confirmPassword: [],
    };

    if (!username.trim()) {
      newErrors.username.push("Username is required");
      valid = false;
    }
    if (!password) {
      newErrors.password.push("Password is required");
      valid = false;
    }
    if (mode === "signup") {
      if (!confirmPassword) {
        newErrors.confirmPassword?.push("Password is required");
        valid = false;
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword?.push("Passwords do not match");
        newErrors.password?.push("Passwords do not match");
        valid = false;
      } else {
        if (confirmPassword.length < 8) {
          newErrors.password.push("Must be longer then 8 characters");
          newErrors.confirmPassword.push("Must be longer then 8 characters");
          valid = false;
        }
        if (!hasCapitalLetter.test(confirmPassword)) {
          newErrors.password.push("Must have at lease one capital letter");
          newErrors.confirmPassword.push(
            "Must have at lease one capital letter"
          );
          valid = false;
        }
        if (!hasNumber.test(confirmPassword)) {
          newErrors.password.push("Must have at lease one number");
          newErrors.confirmPassword.push("Must have at lease one number");
          valid = false;
        }
      }
    }

    setErrors(newErrors);
    return valid;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validate()) {
      onSubmit({ username: "username", password: "password" });
      dispatch(setOverlayClosed());
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
          autoFocus
          className={`form__input ${
            errors.username.length > 0 ? "form__input_error" : ""
          }`}
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <div
          className={`form__error ${
            errors.username.length > 0 ? "form__error_show" : ""
          }`}
        >
          {errors.username ? errors.username.map((e) => e) : ""}
        </div>
      </div>
      <div className="form__input-wrapper">
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <div className="form__input-wrapper_2">
          <input
            className={`form__input form__input_left-part ${
              errors.password.length > 0 ? "form__input_error" : ""
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
            className={`form__input_right-part ${
              passwordVisible ? "form__input_right-part_eye-closed" : ""
            } ${
              errors.password.length > 0
                ? "form__input_right-part_error"
                : "form__input_right-part_normal"
            }`}
            type="button"
            onClick={showPassword}
          />
        </div>
        <div
          className={`form__error ${
            errors.password.length > 0 ? "form__error_show" : ""
          }`}
        >
          <ol>
            {errors.password.map((e, i) => (
              <li className="form__error-line" key={i}>
                {e}
              </li>
            ))}
          </ol>
        </div>
      </div>
      {mode === "signup" && (
        <div className="form__input-wrapper">
          <label className="form__label" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className={`form__input ${
              errors.confirmPassword.length > 0 ? "form__input_error" : ""
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
              errors.confirmPassword.length > 0 ? "form__error_show" : ""
            }`}
          >
            <ol>
              {errors.password.map((e, i) => (
                <li className="form__error-line" key={i}>
                  {e}
                </li>
              ))}
            </ol>
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
