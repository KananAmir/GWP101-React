import React from "react";
import PrimaryButton from "../../components/button";
import "./index.scss";

const Header = () => {
  return (
    <div id="header">
      <h1>This is Header</h1>
      <PrimaryButton btnText="header btn" bgColor="bg-red" />
      <hr />
    </div>
  );
};

export default Header;
