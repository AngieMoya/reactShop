import React from "react";
import "../styles/PasswordRecovery.scss";
import Button from "../components/Button";

const PasswordRecovery = () => {
  return (
    <div className="container">
      <div className="form-container">
        <h1 className="title">Password recovery</h1>
        <p className="subtitle">
          Inform the email address used to create your account
        </p>
        <form action="/">
          <div>
            <label for="email" className="label">
              Email address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="input"
              placeholder="maxilindo@gmail.com"
            />
          </div>
          <Button variant={"primary"} text="Submit"></Button>
          <a href="" className="resend">
            Back to log in
          </a>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
