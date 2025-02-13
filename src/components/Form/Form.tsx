import { useDispatch } from "react-redux";
import { setOverlayClosed } from "../../features/ui/uiSlice";
import "./Form.less";
import Input from "../Input/Input";

function Form() {
  const dispatch = useDispatch();

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="form__heading">Form Title</h2>
      <Input label="Login" type="text" id="login" placeholder="login"></Input>
      <Input label="Email" type="email" id="email" placeholder="Email"></Input>
      <Input
        label="Phone"
        type="tel"
        id="phone"
        placeholder="+0 (000) 000-00-00"
      ></Input>
      <Input
        label="Password"
        type="password"
        id="password"
        placeholder="Password"
      ></Input>
      <input
        className="submit"
        type="submit"
        value={"Submit"}
        onClick={() => {
          dispatch(setOverlayClosed());
        }}
      />
    </form>
  );
}

export default Form;
