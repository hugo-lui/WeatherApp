import React from "react";
import "./Button.css";

export default function SubmitButton(props) {
  return(
    <div className="container"><button className="button" onClick={props.onClick}>Submit</button></div>
  );
}