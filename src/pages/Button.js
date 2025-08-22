import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.text}
    </button>
  );
};

export default Button;
