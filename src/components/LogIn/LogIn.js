import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LogIn.css";
import GoogleSignIn from "../../images/btn_google_signin_dark_focus_web.png";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firbase.init";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p>{error?.message}</p>
          {loading && <p>Loading...</p>}
          <input className="form-submit-btn" type="submit" value="Login" />
        </form>
        <p style={{ textAlign: "center" }}>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create An Account
          </Link>
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="hr-line-style">
            <div className="form-hr">
              <hr />
            </div>
            <p style={{ display: "inline" }}>or</p>
            <div className="form-hr">
              <hr />
            </div>
          </div>
        </div>
        <div className="google-sign-in">
          <button>
            <img src={GoogleSignIn} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
