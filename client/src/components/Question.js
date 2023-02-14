import React from "react";
import "./Text.css";

export default function Question(props) {
  return(
    <h1 id={props.colour}>What colour is the {props.area} on a clear day?</h1>
  );
}