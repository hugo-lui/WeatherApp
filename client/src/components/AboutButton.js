import React from "react";
import "./Button.css";

export default function AboutButton(props) {
  return(
    <div className="container"><button className="button" onClick={props.onClick}>About</button></div>
  );
}