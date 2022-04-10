import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

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
      </div>
    </div>
  );
};

export default LogIn;
