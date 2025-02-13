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

  function checkIfPasswordsEqual() {
    console.log();
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
    return (
      <div className="input-wrapper">
        <label className="label">{label}</label>
        <input
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
      <div className="input-wrapper">
        <label className="label">{label}</label>
        <input
          id={id}
          className="input password"
          type={type}
          placeholder={placeholder}
          required
        ></input>
      </div>
    );
  } else {
    return <div>Wrong type</div>;
  }
}

export default Input;
