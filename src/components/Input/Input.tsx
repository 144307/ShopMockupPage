// надо определиться с тем какие параметры и функции передовать в uu
import { useEffect, useRef, useState } from "react";
import "./Input.css";

interface Props {
  label: string;
  type: string;
  id: string;
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (values: { username: string; password: string }) => void;
}

function Input({
  label: label,
  type: type,
  id: id,
  placeholder: placeholder,
  setValue: setValue,
}: Props) {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  useEffect(() => {
    checkIfPasswordsEqual(firstPassword, secondPassword);
  }, [firstPassword, secondPassword]);

  const [errorLabel, setErrorLabel] = useState(false);
  const ref = useRef<HTMLInputElement>(null);
  const optionalRef = useRef<HTMLInputElement>(null);
  const [showError, setShowError] = useState(false);

  function checkIfPasswordsEqual(first: string, second: string) {
    if (first !== second && first !== "" && second !== "") {
      console.log(first.length);
      if (ref.current && optionalRef.current) {
        setShowError(true);
      } else {
        console.log("input ref is null");
      }
    } else if (
      first === second &&
      first !== "" &&
      second !== "" &&
      first.length > 8 &&
      second.length > 8
    ) {
      if (ref.current && optionalRef.current) {
        setShowError(false);
      } else {
        console.log("input ref is null");
      }
    }
  }

  if (type === "text") {
    return (
      <div className="input-wrapper">
        <label className="label">{label}</label>
        <input
          id={id}
          className={`input login${showError ? " input_error" : ""}`}
          type={type}
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.currentTarget.value);
          }}
          minLength={2}
          maxLength={10}
          required
        ></input>
      </div>
    );
  } else if (type === "email") {
    return (
      <div className="input-wrapper">
        <label className="label">{label}</label>
        <input
          id={id}
          className={`input login${showError ? " input_error" : ""}`}
          type={type}
          placeholder={placeholder}
          required
        ></input>
      </div>
    );
  } else if (type === "tel") {
    return (
      <div className="input-wrapper">
        <label className="label">{label}</label>
        <input
          id={id}
          className={`input login${showError ? " input_error" : ""}`}
          type={type}
          placeholder={placeholder}
          required
        ></input>
      </div>
    );
  } else if (type === "password") {
    return (
      <div className="password-wrapper">
        <div className="input-wrapper">
          <label className="label">Password</label>
          <input
            ref={ref}
            id={id}
            className={`input login${showError ? " input_error" : ""}`}
            type={type}
            placeholder={placeholder}
            required
            onChange={(e) => setFirstPassword(e.currentTarget.value)}
          ></input>
          <label className={`error-label ${errorLabel ? "" : "hidden"}`}>
            Passwords must be equal
          </label>
        </div>
        <div className="input-wrapper">
          <label className="label">Repeat Password</label>
          <input
            ref={optionalRef}
            id={id}
            className="input password"
            type={type}
            placeholder={placeholder}
            required
            onChange={(e) => setSecondPassword(e.currentTarget.value)}
          ></input>
        </div>
      </div>
    );
  } else {
    return <div>Wrong type</div>;
  }
}

export default Input;
