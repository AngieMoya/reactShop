import React from "react";
import "../styles/NewPassword.scss";
import Button from '../components/Button';

import logo from '@logos/logo_yard_sale.svg';

const NewPassword = () => {
  return (
    <div className="form-container">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="title">Create a new password</h1>
      <p className="subtitle">Enter a new password for your account</p>

      <form action="/">
        <label for="password" className="label">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="**********"
          className="input"
        />
        <label for="confirm-password" className="label">
          Re-enter password
        </label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          placeholder="**********"
          className="input input-password"
        />
        <Button variant={"primary"} text="Confirm"></Button>
      </form>
    </div>
  );
};

export default NewPassword;
