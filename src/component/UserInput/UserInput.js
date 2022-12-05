import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const UserInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const [country, setCountry] = useState("");
  const [country2, setCountry2] = useState("");

  const cList = [{ value: "A" }, { value: "B" }, { value: "C" }];

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty value)",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "please enter a valid age (>0)",
      });
      return;
    }

    const inputData = {
      name: enteredName,
      age: enteredAge,
    };

    props.onSaveData(inputData);
    setEnteredName("");
    setEnteredAge("");
  };

  const cHandler = (event) => {
    console.log(event.target.value);
    setCountry(event.target.value);
  };

  const cHandler2 = (event) => {
    console.log(event.target.value);
    setCountry2(event.target.value);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form onSubmit={submitHandler}>
        <div>Name</div>
        <input type="text" value={enteredName} onChange={nameHandler} />
        <div>Age</div>
        <input type="number" value={enteredAge} onChange={ageHandler} min={0} />

        <div>
          <select
            name="FirstDropDown"
            id=""
            value={country}
            onChange={cHandler}
          >
            <option value=""></option>
            {cList
              .filter((c) => c.value !== country2)
              .map((list, index) => (
                <option key={index}>{list.value}</option>
              ))}
          </select>
        </div>

        <div>
          <select
            name="SecondDropDown"
            id=""
            value={country2}
            onChange={cHandler2}
          >
            <option value=""></option>
            {cList
              .filter((c) => c.value !== country)
              .map((filteredList, index) => (
                <option key={index}>{filteredList.value}</option>
              ))}
          </select>
        </div>
        <div>
          <button type="submit">Add Person</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
