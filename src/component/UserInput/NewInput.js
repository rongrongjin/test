import UserInput from "./UserInput";
import React from "react";

const NewInput = (props) => {
  const saveHandler = (enteredData) => {
    const inputDatas = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddInput(inputDatas);
  };
  return (
    <div>
      <UserInput onSaveData={saveHandler} />
    </div>
  );
};

export default NewInput;
