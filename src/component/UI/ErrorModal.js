import React from "react";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onConfirm} />
      <div className="modal">
        <header>
          <h2>{props.title}</h2>
        </header>

        <div>
          <p>{props.message}</p>
        </div>

        <footer>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
