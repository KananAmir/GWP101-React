import React from "react";
import PrimaryButton from "../../components/button";

const Footer = () => {
  let group = "GWP101";

  //   let status = true;
  return (
    <div>
      <h1>This is Footer made by {group}</h1>
      <PrimaryButton btnText="footer btn" bgColor="bg-teal" />
    </div>
  );
};

export default Footer;
