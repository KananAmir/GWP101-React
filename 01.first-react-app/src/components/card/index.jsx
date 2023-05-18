import React from "react";
import InputComp from "../input";

// const CardComp = ({ score, user }) => {
const CardComp = (props) => {
  const { score, user, inputLabel, users } = props;
  // console.log(props);
  console.log("card comp", users);
  return (
    <>
      <div>This is Card component</div>
      <p>lorem ipsum</p>
      <p>Score is {score}</p>
      <p>FullName: {user.fullName}</p>

      <hr />
      <InputComp inputLabel={inputLabel} />
      <hr />
    </>
  );
};

export default CardComp;
