import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, type, url }) => {
  return (
    <Link to={`${url}`} className={`button-basic ${type}`}>
      {children}
    </Link>
  );
};

export default Button;
