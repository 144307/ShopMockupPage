import { useEffect, useRef, useState } from "react";
import "./Input.css";

interface Props {
  label: string;
  type: string;
  id: string;
  placeholder: string;
}

function Input({
  label: label,
  type: type,
  id: id,
  placeholder: placeholder,
}: Props) {
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  useEffect(() => {
    checkIfPasswordsEqual(firstPassword, secondPassword);
  }, [firstPassword, secondPassword]);

  const ref = useRef<HTMLInputElement>(null);
  const optionalRef = useRef<HTMLInputElement>(null);

  function checkIfPasswordsEqual(first: string, second: string) {
    if (first !== second && first !== "" && second !== "") {
      console.log("error");
      if (ref.current && optionalRef.current) {
        ref.current.classList.add("input_error");
        optionalRef.current.classList.add("input_error");
        ref.current.classList.remove("input_correct");
        optionalRef.current.classList.remove("input_correct");
      } else {
        console.log("input ref is null");
      }
    } else if (first === second && first !== "" && second !== "") {
      if (ref.current && optionalRef.current) {
        ref.current.classList.remove("input_error");
        optionalRef.current.classList.remove("input_error");
        ref.current.classList.add("input_correct");
        optionalRef.current.classList.add("input_correct");
      } else {
        console.log("input ref is null");
      }
    }
  }

  function checkInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  if (type === "text") {
    return (
      <div className="input-wrapper">
        <label className="label">{label}</label>
        <input
          ref={ref}
          id={id}
          className="input login"
          type={type}
          placeholder={placeholder}
          onChange={checkInput}
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
          ref={ref}
          id={id}
          className="input email"
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
          ref={ref}
          id={id}
          className="input phone"
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
            className="input password"
            type={type}
            placeholder={placeholder}
            required
            onChange={(e) => setFirstPassword(e.currentTarget.value)}
          ></input>
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
