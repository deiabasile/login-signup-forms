import React from "react";
import classes from "./Input.module.scss";

function Input({ onInputChange, inputValue, label, placeholder }) {
  return (
    <div>
      <label className={classes.label}>
        {label}
        <input
          className={classes.inputWrapper}
          type="text"
          placeholder={placeholder}
          onChange={onInputChange}
          value={inputValue}
        />
      </label>
    </div>
  );
}

export default Input;
