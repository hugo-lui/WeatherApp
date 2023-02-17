import React from "react";
import "./Text.css";

export default function Message(props) {
  return(
    <h1 id={props.colour}>{props.sentence}</h1>
  );
}