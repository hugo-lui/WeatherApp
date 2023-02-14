import React from "react";
import "./Button.css";

export default function BackButton(props) {
  return(
    <div className="container"><button className={props.colour} onClick={props.onClick}>Home</button></div>
  );
}