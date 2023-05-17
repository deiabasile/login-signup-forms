import React from "react";
import classes from "./Button.module.scss";

function Button({ onButtonClick, description }) {
  return (
    <button className={classes.button} onClick={onButtonClick}>
      {description}
    </button>
  );
}

export default Button;
