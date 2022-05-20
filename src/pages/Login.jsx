import React, { useRef } from "react";
import "../styles/Login.scss";
import Button from "../components/Button";

import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(form.current); //current hace referencia a que esta trayendo lo que hay en el form
    const data = {                               
      username: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src={logo} alt="logo" className="logo" />
        <form action="/" ref={form}>
          <label for="email" className="label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="maxilindo@gmail.com"
          />
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="*********"
          />
          <Button
            variant={"primary"}
            text="Log in"
            onClick={handleSubmit}
          ></Button>
          <a href="" className="forgot-password">
            Forgot my password
          </a>
        </form>
        <Button variant={"secondary"} text="Sign up"></Button>
      </div>
    </div>
  );
};

export default Login;
