import React from "react";

const InputComp = ({ inputLabel }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <label htmlFor="">{inputLabel}</label>
      <br />
      <input type="text" id="user-input" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default InputComp;
