import NewInput from "./component/UserInput/NewInput";
import { useState } from "react";
import UserList from "./component/UserList/UserList";

function App() {
  const [list, setList] = useState([]);
  const addInputHandler = (e) => {
    setList((prevE) => {
      return [...prevE, e];
    });
  };
  return (
    <div>
      <NewInput onAddInput={addInputHandler} />
      <UserList items={list} />
    </div>
  );
}

export default App;
