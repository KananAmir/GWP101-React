import React from "react";
// import { users } from "../../data";

const Table = (props) => {
  //   console.log(users);
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Adress, street</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => {
          return (
            <tr style={{ color: user.id === 4 && "red" }}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
