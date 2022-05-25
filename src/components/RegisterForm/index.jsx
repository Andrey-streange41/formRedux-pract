import React, { useState } from "react";
import { connect } from "react-redux";
import { sendData } from "../../actions/actionCreator.js";

export const RegisterForm = (props) => {
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [validation, setValidation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const send = sendData({ password: password, login: login });
    props.dispatch(send);
    setValidation(true);
  };

  return !validation ? (
    <form onSubmit={handleSubmit}>
      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="email"
        name="email"
        placeholder="Email ..."
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        name="password"
        placeholder="Password ..."
      />
      <input type="submit" value="Log in" />
    </form>
  ) : (
    <div>
      {login}
      <div>{password}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.userData,
});

export default connect(mapStateToProps)(RegisterForm);
