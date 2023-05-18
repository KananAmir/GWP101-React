import React from "react";
import "./index.scss";
const PrimaryButton = (props) => {
  console.log(props);
  // const { btnText } = props;
  const btnStyle = {
    // color: "teal",
    border: "1px solid teal",
    padding: "10px 20px",
    borderRadius: "10px",
  };

  const handleClick = () => {
    console.log("Hello this is me");
  };

  return (
    // <button style={btnStyle} onClick={() => handleClick()}>
    <div id="primary-btn">
      <button style={btnStyle} onClick={handleClick} className={props.bgColor}>
        {props.btnText}
      </button>
    </div>
  );
};

export default PrimaryButton;
