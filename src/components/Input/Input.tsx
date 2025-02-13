import { useEffect } from "react";
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
  useEffect(() => {}, []);

  function checkInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  if (type === "text") {
    return (
      <div className="input">
        <label className="label">{label}</label>
        <input
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
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input
        id={id}
        className="input email"
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </div>;
  } else if (type === "tel") {
    console.log("test");
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input
        id={id}
        className="input phone"
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </div>;
  } else if (type === "password") {
    <div className="input-wrapper">
      <label className="label">{label}</label>
      <input
        id={id}
        className="input password"
        type={type}
        placeholder={placeholder}
        required
      ></input>
    </div>;
  }
}

export default Input;
