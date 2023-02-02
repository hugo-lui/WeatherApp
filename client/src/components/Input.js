import React from "react";
import "./Input.css";

export default function Input(props) {
  return(
    <div className="input"><input type="text" onChange={props.onChange}/></div>
  );
}