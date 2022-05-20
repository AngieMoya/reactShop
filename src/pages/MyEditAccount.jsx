import React from "react";
import '../styles/MyEditAccount.scss';
import Button from "../components/Button";

const MyEditAccount = () => {
  return (
    <div className="form-container">
      <h1 className="title title-left">My account</h1>
      <form action="/">
        <div>
          <label for="name" className="label">
            Name
          </label>
          <p className="value">Maximiliano Ahumada Moya</p>
          <label for="email" className="label">
            Email address
          </label>
          <p className="value">maxilindo@gmail.com</p>
          <label for="password" className="label">
            Password
          </label>
          <p className="value">**********</p>
        </div>
        <Button variant={"primary"} text="Edit"></Button>
      </form>
    </div>
  );
};

export default MyEditAccount;
