import React from "react";
import "./Button.css";

export default function BackButton(props) {
  return(
    <div className="container"><button className="button" onClick={props.onClick}>Back</button></div>
  );
}