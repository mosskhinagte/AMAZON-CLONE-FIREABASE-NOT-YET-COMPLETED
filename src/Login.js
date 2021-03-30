import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //if successfully...
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    //do something facey register work
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_log.svg.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            onClick={signIn}
            className="login__signinButton"
          >
            Sign-In
          </button>
        </form>
        <p>
          Bt signin-in you agree to the Amazon FAKE CLONE conditions our
          Conditions fo Use & Sale.PLease see our Privacy Notice, our Cokie
          Notice and our interest-Based Ads Notice
        </p>

        <button onClick={register} className="login__registerButton">
          Create new Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
