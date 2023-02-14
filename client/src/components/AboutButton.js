import React from "react";
import "./Button.css";

export default function AboutButton(props) {
  return(
    <div className="container"><button className={props.colour} onClick={props.onClick}>About</button></div>
  );
}