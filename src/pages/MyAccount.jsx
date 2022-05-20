import React from "react";
import '../styles/MyAccount.scss';
import Button from "../components/Button";

const MyAccount = () => {
  return (
    <div className="form-container">
      <h1 className="title title-left">My account</h1>
      <form action="/">
        <div>
          <label for="name" className="label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="input"
            placeholder="Maximiliano Ahumada Moya"
          />
          <label for="email" className="label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="input"
            placeholder="maxilindo@gmail.com"
          />
          <label for="password" className="label">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            placeholder="**********"
          />
        </div>
        <Button variant={"primary"} text="Create"></Button>
      </form>
    </div>
  );
};

export default MyAccount;
