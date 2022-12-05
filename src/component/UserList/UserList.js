import React from "react";
import "./UserList.css";
// import inputItems from "./inputItems";

const UserList = (props) => {
  const onDelete = () => {
    props.items.filter((item) => item.id !== item.id);
  };
  return (
    <div className="list">
      {props.items.map((item) => (
        <li key={item.id}>
          {item.name} ({item.age} years old)
          <button onClick={onDelete}>delete</button>
        </li>
      ))}
    </div>

    // <inputItems
    //   key={props.items.id}
    //   name={props.items.name}
    //   age={props.items.age}
    // />
  );
};

export default UserList;
