import React from "react";
import "../styles/Button.scss";

const Button = ({ variant, text, type="submit", onClick }) => {
  const localVariant =
    variant === "primary" ? "primary-button" : "secondary-button";
  return <button className={localVariant} type={type} onClick={onClick}>{text}</button>;
};

export default Button;
