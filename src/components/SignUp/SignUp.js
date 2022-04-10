import React from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../../images/btn_google_signin_dark_focus_web.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firbase.init";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/shop");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Password didn't match !");
      return;
    }
    if (password.length < 6) {
      setError("Password length must be greater than 6 character");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
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
          <div className="input-group">
            <label htmlFor="password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit-btn" type="submit" value="Sign Up" />
        </form>
        <p style={{ textAlign: "center" }}>
          Already have an Account?{" "}
          <Link className="form-link" to="/login">
            Log In
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

export default SignUp;
