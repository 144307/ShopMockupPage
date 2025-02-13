import { useDispatch } from "react-redux";
import { setOverlayClosed } from "../../features/ui/uiSlice";
import "./Form.less";

function Form() {
  const dispatch = useDispatch();

  function checkInput(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <form className="form" onSubmit={(e) => e.preventDefault()}>
      <h2 className="form__heading">Form Title</h2>
      <div className="input-wrapper">
        <label className="label">Login</label>
        <input
          id="login"
          className="input login"
          type="text"
          placeholder="Login"
          onChange={checkInput}
        ></input>
      </div>
      <div className="input-wrapper">
        <label className="label">Email</label>
        <input
          id="email"
          className="input email"
          type="email"
          placeholder="example@mail.com"
        ></input>
      </div>
      <div className="input-wrapper">
        <label className="label">Phone</label>
        <input
          id="phone"
          className="input phone"
          type="tel"
          placeholder="Phone"
        ></input>
      </div>
      <div className="input-wrapper">
        <label className="label">Password</label>
        <input
          id="password"
          className="input password"
          type="password"
          placeholder="Password"
        ></input>
      </div>
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
