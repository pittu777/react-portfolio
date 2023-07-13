import React from "react";
import LogoP from "../../../assets/images/logoP.png";
import "./index.scss";
const Logo = () => {
  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoP} alt="JavaScript,  Developer" />
    </div>
  );
};

export default Logo;
