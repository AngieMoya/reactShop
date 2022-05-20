import React from "react";
import "../styles/SendEmail.scss";
import Button from "../components/Button";

import logo from '@logos/logo_yard_sale.svg';

const SendEmail = () => {
  return (
    <div className="container">
      <div className="body-container">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">
          Please check your inbox for instructions on how to reset the password
        </p>
        <div className="email-image">
          <img src="assets/icons/email.svg" alt="email" />
        </div>
        <Button
          variant={"primary"}
          text="Login"
        ></Button>
        <p className="resend">
          <span>Didn't receive the email? </span>
          <a href="dd">Resend</a>
        </p>
      </div>
    </div>
  );
};

export default SendEmail;
