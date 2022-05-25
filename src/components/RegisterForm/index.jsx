import React, { useState } from "react";
import { connect } from "react-redux";

export const RegisterForm = (props) => {
  const [password, setPassword] = useState();
  const [login, setLogin] = useState();
  const [validation , setValidation] = useState(false)

  const handleSubmit = (e) => {
        e.preventDefault();
        props.user.userState = {login:login, password:password}
        setValidation(true);
  };

  return (
   !validation ? <form onSubmit={handleSubmit}>
      <input onChange={e=>setLogin(e.target.value)} type="email" name="email" placeholder="Email ..." />
      <input onChange={e=>setPassword(e.target.value)} type="password" name="password" placeholder="Password ..." />
      <input type="submit" value="Log in" />
    </form> : <div>{props.user.userState.login }<div>{props.user.userState.password}</div></div>
  );
};

const mapStateToProps = (state) => ({
    user : state.userData
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
