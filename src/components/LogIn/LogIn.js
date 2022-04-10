import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";
import GoogleSignIn from "../../images/btn_google_signin_dark_focus_web.png";

const LogIn = () => {
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Log In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </div>
          <input className="form-submit-btn" type="submit" value="Login" />
        </form>
        <p style={{ "text-align": "center" }}>
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
